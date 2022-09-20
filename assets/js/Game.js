class Game {
    static PLAYER = {
        WHITE: 1,
        BLACK: 0
    };
    static columnsKeys = 'ABCDEFGH';
    static rowsKeys = '12345678';
    constructor() {
        this.player0 = new Player(Game.PLAYER.BLACK, this);
        this.player1 = new Player(Game.PLAYER.WHITE, this);
        this.selectedSoldier = null;
        this.gameProcess = 0;
        let gameObj = this;
        $(document).on('click', '.one-cell', function () {
            if ($(this).hasClass('possibleToMoveToAndEat') || $(this).hasClass('possibleToMoveTo') || $(this).hasClass('possibleToMoveByCastling')) {
                let eating = $(this).hasClass('possibleToMoveToAndEat');
                let distPosition = {
                    column: $(this).attr('data-column'),
                    row: $(this).attr('data-row')
                }
                if (eating) {
                    //console.log("eat...");
                    let eatenSoldier = gameObj.getSoldierByCords(distPosition);
                    if (!isNotNull(eatenSoldier)) {
                        eatenSoldier = gameObj.getSoldierByCords(distPosition, true);
                    }
                    eatenSoldier.getSoldierDom().fadeOut(1000, function () {
                        $(this).remove();
                    });
                    eatenSoldier.setPosition(null);
                }
                else{
                    //console.log("move...");
                }
                gameObj.selectedSoldier.moveSoldierToPosition(distPosition);
                let simpleHasReachedExtremities = gameObj.selectedSoldier.checkIfSoldierIsSimpleAndGetsTheExtremities();
                if (simpleHasReachedExtremities) {
                    gameObj.showModalToSelectWitchExtraSoldierToReplaceSimple(gameObj.getRoundPlayer(), gameObj.selectedSoldier, function () {
                        gameObj.increaseGameProcess();
                        gameObj.prepareToNextMove();
                    });
                    console.log("choose a player to replace it.");
                }
                else{
                    if ($(this).hasClass('possibleToMoveByCastling')) {
                        let castlingObj = Soldier.getColumnToCastlingByColumn(distPosition.column);
                        let tour = gameObj.getSoldierByCords(new Position(Soldier.getInitialPos(castlingObj.tourId, gameObj.getRoundPlayer()).column, Game.getRowByIndexByPlayer(1, gameObj.getRoundPlayer())));
                        tour.moveSoldierToPosition(new Position(castlingObj.columnDist, Game.getRowByIndexByPlayer(1, gameObj.getRoundPlayer())));
                    }
                    gameObj.increaseGameProcess();
                    gameObj.prepareToNextMove();
                }

            }
        });
    }

    prepareToNextMove() {
        $('.one-piece').removeClass('selected canHover');
        $('.one-cell').removeClass('possibleToMoveTo possibleToMoveToAndEat possibleToMoveByCastling');
        this.switchRoundPlayer();
        let someOneInDanger = this.checkIfOneOfKingsIsInDanger();
        let playerToCheck = this.getThePlayerOfThisRound();
        let nextPlayerCanPlay = playerToCheck.checkIfPlayerHasAnyMove();
        if (!nextPlayerCanPlay) {
            if (someOneInDanger) {
                playerToCheck.king.getSoldierDom().addClass('kingIsDead');
                console.log("Player ("+playerToCheck.getPlayerName()+") Lost :(");
            }
            else{
                console.log("Partie null.");
            }
            this.showWinnerModal(someOneInDanger, playerToCheck.getTheOtherPlayerObj());
            return this.endGame();
        }
        let player = this.getThePlayerOfThisRound();
        if (player.getType() === Player.TYPES.HUMAN) {
            $('.one-piece[data-player-id="' + this.roundPlayer + '"]').addClass('canHover');
            if (isNotNull(this.selectedSoldier)) {
                this.selectedSoldier.getPlayerObject().enableClickOnPieces();
            }
        }
        setTimeout(function () {
            player.itsThisPlayerTurn();
        }, 1500);
    }

    showWinnerModal(isThereWinner, playerToCheck) {
        setTimeout(function () {
            if (isThereWinner) {
                $('#winner_modal').find('#end-game-status').html("Congratulations");
                $('#winner_modal').find('#win-text').html("Player <b>"+playerToCheck.getPlayerName()+"</b> won !!");
            }
            else{
                $('#winner_modal').find('#end-game-status').html("No winner");
                $('#winner_modal').find('#win-text').html("");
            }
            $('#winner_modal').modal({backdrop: 'static', keyboard: false});
            $('#winner_modal').modal('show');
        }, 1500);
    }

    endGame() {
        console.log("//////////\\\\\\\\\\ END GAME //////////\\\\\\\\\\");
        this.destroy();
    }

    destroy() {
        $('.one-piece-inlist').off('click');
        $('.one-cell').off('click');
        $('.one-piece').off('click');
        $(document).off('click', '.one-cell');
        delete this.player1;
        delete this.player0;
    }

    getThePlayerOfThisRound() {
        if (this.roundPlayer === Game.PLAYER.BLACK) {
            return this.player0;
        }
        else{
            return this.player1;
        }
    }

    checkIfOneOfKingsIsInDanger() {
        if (this.checkIfKingIsInDanger(Game.PLAYER.BLACK)) {
            this.player0.king.getSoldierDom().addClass('kingInDanger');
            console.log("player black is in danger !");
        }
        else{
            this.player0.king.getSoldierDom().removeClass('kingInDanger');
            if (this.checkIfKingIsInDanger(Game.PLAYER.WHITE)) {
                this.player1.king.getSoldierDom().addClass('kingInDanger');
                console.log("player white is in danger !");
            }
            else{
                this.player1.king.getSoldierDom().removeClass('kingInDanger');
                console.log("no one is in danger.");
                return false;
            }
        }
        return true;
    }

    checkIfKingIsInDanger(myPlayer, byIntendedPosition = false) {
        let myPlayerObj, enemyPlayerObj;
        if (myPlayer === Game.PLAYER.WHITE) {
            enemyPlayerObj = this.player0;
            myPlayerObj = this.player1;
        }
        else{
            myPlayerObj = this.player0;
            enemyPlayerObj = this.player1;
        }
        let enemySoldiers = enemyPlayerObj.soldiers;
        let myKingPosition;
        if (byIntendedPosition) {
            myKingPosition = myPlayerObj.king.getIntendedPosition();
        }
        else{
            myKingPosition = myPlayerObj.king.getPosition();
        }
        for (let i = 0; i < enemySoldiers.length; i++) {
            let possiblePosition = enemySoldiers[i].getPossiblePositionsToMove(true, byIntendedPosition);
            if (!isNotNull(possiblePosition)) continue;
            let possiblePositionToEat = possiblePosition.toMoveAndEat;
            for (let i2 = 0; i2 < possiblePositionToEat.length; i2++) {
                if (possiblePositionToEat[i2].column === myKingPosition.column && possiblePositionToEat[i2].row === myKingPosition.row) {
                    return true;
                }
            }
        }
        return false;
    }

    switchRoundPlayer() {
        this.roundPlayer = this.roundPlayer === Game.PLAYER.WHITE ? Game.PLAYER.BLACK : Game.PLAYER.WHITE;
    }

    initializeGame() {
        $('#soldiers_area').empty();
        this.player0.initializePlayerSoldiersInPositions();
        this.player1.initializePlayerSoldiersInPositions();
        this.roundPlayer = Game.PLAYER.BLACK;
    }

    getRoundPlayer() {
        return this.roundPlayer;
    }

    setSelectedSoldier(soldier) {
        this.selectedSoldier = soldier;
    }

    startGame() {
        $('.one-piece').removeClass('kingInDanger kingIsDead');
        this.prepareToNextMove();
    }

    increaseGameProcess() {
        this.gameProcess = this.gameProcess + 1;
    }

    getGameProcess() {
        return this.gameProcess;
    }

    getSoldierByCords(position, byTailCords = false, byIntendedPosition = false) {
        let soldiers = this.player0.soldiers;
        soldiers = soldiers.concat(this.player1.soldiers);
        for (let i = 0; i < soldiers.length; i++) {
            let positionTest;
            if (byIntendedPosition) {
                positionTest = soldiers[i].getIntendedPosition();
            }
            else {
                if (byTailCords) {
                    positionTest = soldiers[i].getTailPosition();
                } else {
                    positionTest = soldiers[i].getPosition();
                }
            }
            if (!isNotNull(positionTest)) continue;
            if (positionTest.column === position.column && positionTest.row === position.row) {
                return soldiers[i];
            }
        }
        return null;
    }

    getOneCellByCords(position) {
        return $('.one-cell[data-column="'+position.column+'"][data-row="'+position.row+'"]');
    }

    showModalToSelectWitchExtraSoldierToReplaceSimple(playerId, soldierToReplace, callback) {
        let playerObj = this.getPlayerObjByPlayerId(playerId);
        if (playerObj.getType() === Player.TYPES.BOT) {
            soldierToReplace.changeSoldierTo(playerObj.nextBotType);
            callback();
            return;
        }
        $('.extra-pieces-list').empty();
        let ids = Soldier.SOLDIERS_TYPES_TO_UPGRADE;
        for (let i = 0; i < ids.length; i++) {
            let src = "assets/img/soldiers/" + Soldier.getImgName(ids[i], playerId);
            const ele = $('<div class="one-piece-inlist" data-soldier-type="'+Soldier.getSoldierTypeById(ids[i])+'"><div class="piece-img-parent"><img src="' + src + '"></div></div>');
            ele.appendTo($('.extra-pieces-list'));
        }

        $('.one-piece-inlist').on('click', function () {
            soldierToReplace.changeSoldierTo($(this).attr('data-soldier-type'));
            $('#choose_extra_soldier').modal('hide');
            callback();
        });

        $('#choose_extra_soldier').modal({backdrop: 'static', keyboard: false});
        $('#choose_extra_soldier').modal('show');
    }

    moveInThinking(distPosition, eating, castling, selectedSoldier, roundPlayer) {
        if (eating) {
            //console.log("eat...");
            let eatenSoldier = this.getSoldierByCords(distPosition, false, true);
            if (!isNotNull(eatenSoldier)) {
                eatenSoldier = this.getSoldierByCords(distPosition, true, true);
                eatenSoldier.setIntendedPosition(null);
            }
        }
        else{
            //console.log("move...");
        }
        let simpleHasReachedExtremities = selectedSoldier.checkIfSoldierIsSimpleAndGetsTheExtremities(true);
        if (simpleHasReachedExtremities) {
            return true;
            console.log("choose a player to replace it.");
        }
        else{
            if (castling) {
                let castlingObj = Soldier.getColumnToCastlingByColumn(distPosition.column);
                let tour = this.getSoldierByCords(new Position(Soldier.getInitialPos(castlingObj.tourId, roundPlayer).column, Game.getRowByIndexByPlayer(1, roundPlayer)), false, true);
                tour.setIntendedPosition(new Position(castlingObj.columnDist, Game.getRowByIndexByPlayer(1, roundPlayer)));
                tour.increaseIntendedMovementsCount();
            }
            //this.increaseGameProcess();
            //this.prepareToNextMove();
        }
        selectedSoldier.increaseIntendedMovementsCount();
        return false;
    }

    getSoldierObjectByUniqueId(uniqueId) {
        let objects = this.player0.soldiers;
        objects = objects.concat(this.player1.soldiers);
        for (let i = 0; i < objects.length; i++) {
            if (objects[i].getUniqueId() === uniqueId) {
                return objects[i];
            }
        }
    }

    getPlayerObjByPlayerId(playerId) {
        if (playerId === Game.PLAYER.BLACK) {
            return this.player1;
        }
        else{
            return this.player0;
        }
    }

    static getFourthRowByPlayer(playerId) {
        return Game.getRowByIndexByPlayer(4, playerId);
    }

    static getRowByIndexByPlayer(index, playerId) {
        if (playerId === Game.PLAYER.BLACK) {
            return Game.rowsKeys[index-1];
        }
        else{
            return Game.rowsKeys.slice(-index)[0];
        }
    }
}