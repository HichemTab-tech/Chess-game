class Player {
    static TYPES = {
        HUMAN: "0",
        BOT: "1"
    };
    static BOT_THINKING_DEPTH = {
        EASY: 1,
        MEDIUM: 6,
        HARD: 10,
        EXTREME: 20,
        UNBEATABLE: 40
    };
    static STATUS = {
        IN_GAME: "0",
        DEAD: "1"
    };
    constructor(id, game, type = Player.TYPES.HUMAN, botThinkingDepth = Player.BOT_THINKING_DEPTH.EASY) {
        this.id = id;
        this.game = game;
        this.type = type;
        this.botThinkingDepth = botThinkingDepth;
        this.simple_a = new Soldier(Soldier.SOLDIERS.SIMPLE_A, this.id, this.game);
        this.simple_b = new Soldier(Soldier.SOLDIERS.SIMPLE_B, this.id, this.game);
        this.simple_c = new Soldier(Soldier.SOLDIERS.SIMPLE_C, this.id, this.game);
        this.simple_d = new Soldier(Soldier.SOLDIERS.SIMPLE_D, this.id, this.game);
        this.simple_e = new Soldier(Soldier.SOLDIERS.SIMPLE_E, this.id, this.game);
        this.simple_f = new Soldier(Soldier.SOLDIERS.SIMPLE_F, this.id, this.game);
        this.simple_g = new Soldier(Soldier.SOLDIERS.SIMPLE_G, this.id, this.game);
        this.simple_h = new Soldier(Soldier.SOLDIERS.SIMPLE_H, this.id, this.game);
        this.tour_a = new Soldier(Soldier.SOLDIERS.TOUR_A, this.id, this.game);
        this.tour_h = new Soldier(Soldier.SOLDIERS.TOUR_H, this.id, this.game);
        this.king = new Soldier(Soldier.SOLDIERS.KING, this.id, this.game);
        this.queen = new Soldier(Soldier.SOLDIERS.QUEEN, this.id, this.game);
        this.hors_b = new Soldier(Soldier.SOLDIERS.HORS_B, this.id, this.game);
        this.hors_g = new Soldier(Soldier.SOLDIERS.HORS_G, this.id, this.game);
        this.fou_c = new Soldier(Soldier.SOLDIERS.FOU_C, this.id, this.game);
        this.fou_f = new Soldier(Soldier.SOLDIERS.FOU_F, this.id, this.game);
        this.soldiers = [
            this.simple_a,
            this.simple_b,
            this.simple_c,
            this.simple_d,
            this.simple_e,
            this.simple_f,
            this.simple_g,
            this.simple_h,
            this.tour_a,
            this.tour_h,
            this.king,
            this.queen,
            this.hors_b,
            this.hors_g,
            this.fou_c,
            this.fou_f
        ];
        this.status = Player.STATUS.IN_GAME;
    }

    getStatus() {
        return this.status;
    }

    setStatus(status) {
        this.status = status;
    }

    getIntendedStatus() {
        return this.intendedStatus;
    }

    setIntendedStatus(status) {
        this.intendedStatus = status;
    }

    initializePlayerSoldiersInPositions() {
        for (let i = 0; i < this.soldiers.length; i++) {
            let soldierElement = this.soldiers[i].createDomElement();

            let soldierObj = this.soldiers[i];
            let playerObj = this;
            soldierElement.click(function () {
                if (soldierObj.game.getRoundPlayer() === soldierObj.playerId) {
                    soldierObj.game.setSelectedSoldier(soldierObj);
                    playerObj.disableClickOnPieces();
                    let possiblePositions = soldierObj.getPossiblePositionsToMove();
                    if (!isNotNull(possiblePositions)) {
                        showNotification("Error !!!", 5000);
                        return;
                    }
                    //console.log(possiblePositions);
                    $('.one-piece').removeClass('selected');
                    $(this).addClass('selected');
                    $('.one-cell').removeClass('possibleToMoveTo possibleToMoveToAndEat possibleToMoveByCastling');
                    for (let i = 0; i < possiblePositions.toJustMove.length; i++) {
                        $('.one-cell[data-column="' + (possiblePositions.toJustMove[i].column) + '"][data-row="' + (possiblePositions.toJustMove[i].row) + '"]').addClass('possibleToMoveTo');
                    }
                    for (let i = 0; i < possiblePositions.toMoveAndEat.length; i++) {
                        $('.one-cell[data-column="' + (possiblePositions.toMoveAndEat[i].column) + '"][data-row="' + (possiblePositions.toMoveAndEat[i].row) + '"]').addClass('possibleToMoveToAndEat');
                    }
                    for (let i = 0; i < possiblePositions.toCastling.length; i++) {
                        $('.one-cell[data-column="' + (possiblePositions.toCastling[i].column) + '"][data-row="' + (possiblePositions.toCastling[i].row) + '"]').addClass('possibleToMoveByCastling');
                    }
                }
                else{
                    console.log("NOT YOUR TURN !");
                }
            });
        }
    }

    disableClickOnPieces() {
        let targetId = this.game.roundPlayer === 1 ? 0 : 1;
        $('.one-piece[data-player-id="'+targetId+'"], .one-piece[data-player-id="'+targetId+'"] *').css("pointer-events", "none");
    }

    enableClickOnPieces() {
        let targetId = this.game.roundPlayer;
        $('.one-piece[data-player-id="'+targetId+'"], .one-piece[data-player-id="'+targetId+'"] *').css("pointer-events", "auto");
    }

    checkIfPlayerHasAnyMove() {
        let soldiers = this.soldiers;
        for (let i = 0; i < soldiers.length; i++) {
            let possiblePositionsOfThisSoldier = soldiers[i].getPossiblePositionsToMove();
            if (!isNotNull(possiblePositionsOfThisSoldier)) continue;
            if (possiblePositionsOfThisSoldier.toJustMove.length !== 0 || possiblePositionsOfThisSoldier.toMoveAndEat.length !== 0) {
                return true;
            }
        }
        return false;
    }

    getPlayerName() {
        if (this.id === Game.PLAYER.BLACK) {
            return "Black";
        }
        else{
            return "White";
        }
    }

    getTheOtherPlayerObj() {
        if (this.id === Game.PLAYER.BLACK) {
            return this.game.player1;
        }
        else{
            return this.game.player0;
        }
    }

    getType() {
        return this.type;
    }

    getBotThinkingDepth() {
        return this.botThinkingDepth;
    }

    itsThisPlayerTurn() {
        if (this.type !== Player.TYPES.BOT) {
            return;
        }
        console.log("BOT is thinking...");
        this.startThinking();
    }

    startThinking() {
        let maxDepth = this.getBotThinkingDepth();
        let depth = 0;
        this.prepareSoldiersForBotThinking();
        this.thinkMyLevelsInOneLevel(depth, maxDepth);
        let nextSoldier = this.game.getSoldierObjectByUniqueId(this.nextBotSoldierUniqueId);
        let nextPosition  = this.nextBotPosition;
        let x = [];
        for (let i = 0; i < this.nnn.length; i++) {
            x.push(this.game.getSoldierObjectByUniqueId(this.nnn[i]))
        }
        console.log(x);
        console.log(this.nextBotSoldierUniqueId);
        console.log(nextSoldier);
        let dom = nextSoldier.getSoldierDom();
        dom[0].click();

        let gameObj = this.game;
        setTimeout(function () {
            let cellToGo = gameObj.getOneCellByCords(nextPosition);
            if (cellToGo.length) {
                cellToGo[0].click();
            }
        }, 500);
    }

    prepareSoldiersForBotThinking() {
        let mySoldiers = this.soldiers;
        for (let i = 0; i < mySoldiers.length; i++) {
            mySoldiers[i].setIntendedPosition(new Position().from(mySoldiers[i].getPosition()));
            mySoldiers[i].setIntendedStatus(mySoldiers[i].getStatus());
            mySoldiers[i].setTypeIntended(mySoldiers[i].getType());
        }
        let enemySoldiers = this.getTheOtherPlayerObj().soldiers;
        for (let i = 0; i < enemySoldiers.length; i++) {
            enemySoldiers[i].setIntendedPosition(new Position().from(enemySoldiers[i].getPosition()));
            enemySoldiers[i].setIntendedStatus(enemySoldiers[i].getStatus());
            enemySoldiers[i].setTypeIntended(enemySoldiers[i].getType());
        }
        this.game.player0.setIntendedStatus(this.game.player0.getStatus());
        this.game.player1.setIntendedStatus(this.game.player1.getStatus());
    }

    thinkMyLevelsInOneLevel(depth, maxDepth) {
        console.log(depth+"--"+maxDepth);
        let mySoldiers = this.soldiers;
        let pointsList = [];
        let possiblePositionsAfterThinking = [];
        let possibleSwitchTypesAfterThinking = [];
        let possibleSoldiersAfterThinking = [];
        for (let i = 0; i < mySoldiers.length; i++) {
            if (!isNotNull(mySoldiers[i].getIntendedPosition())) {
                continue;
            }
            let myPossiblePosition = mySoldiers[i].getPossiblePositionsToMove(false, true);// by tmp position
            for (let i2 = 0; i2 < myPossiblePosition.toJustMove.length; i2++) {
                let prevPosition = new Position().from(mySoldiers[i].getIntendedPosition());
                mySoldiers[i].setIntendedPosition(myPossiblePosition.toJustMove[i2]);
                let canChangeType = mySoldiers[i].game.moveInThinking(myPossiblePosition.toJustMove[i2], false, false, mySoldiers[i]);
                let points;
                let switchedType = null;
                if (canChangeType) {
                    let ids = Soldier.SOLDIERS_TYPES_TO_UPGRADE;
                    let pointsList2 = [];
                    for (let i3 = 0; i3 < ids.length; i3++) {
                        mySoldiers[i].changeIntendedSoldierTo(Soldier.getSoldierTypeById(ids[i]));
                        pointsList2.push(this.thinkEnemyLevelsInOneLevel(depth, maxDepth));
                    }
                    points = getMaxValueOfArray(pointsList2);
                    let index = getRandomIndexOf(pointsList2, points);
                    mySoldiers[i].changeIntendedSoldierTo(Soldier.getSoldierTypeById(ids[index]));
                    switchedType = Soldier.getSoldierTypeById(ids[index]);
                }
                else{
                    points = this.thinkEnemyLevelsInOneLevel(depth, maxDepth);
                }
                pointsList.push(points);
                possiblePositionsAfterThinking.push(myPossiblePosition.toJustMove[i2]);
                possibleSwitchTypesAfterThinking.push(switchedType);
                possibleSoldiersAfterThinking.push(mySoldiers[i].getUniqueId());
                mySoldiers[i].setIntendedPosition(prevPosition);
            }
            for (let i2 = 0; i2 < myPossiblePosition.toMoveAndEat.length; i2++) {
                let prevPosition = new Position().from(mySoldiers[i].getIntendedPosition());
                mySoldiers[i].setIntendedPosition(myPossiblePosition.toMoveAndEat[i2]);
                let canChangeType = mySoldiers[i].game.moveInThinking(myPossiblePosition.toMoveAndEat[i2], true, false, mySoldiers[i]);
                let points;
                let switchedType = null;
                if (canChangeType) {
                    let ids = Soldier.SOLDIERS_TYPES_TO_UPGRADE;
                    let pointsList2 = [];
                    for (let i3 = 0; i3 < ids.length; i3++) {
                        mySoldiers[i].changeIntendedSoldierTo(Soldier.getSoldierTypeById(ids[i]));
                        pointsList2.push(this.thinkEnemyLevelsInOneLevel(depth, maxDepth));
                    }
                    points = getMaxValueOfArray(pointsList2);
                    let index = getRandomIndexOf(pointsList2, points);
                    mySoldiers[i].changeIntendedSoldierTo(Soldier.getSoldierTypeById(ids[index]));
                    switchedType = Soldier.getSoldierTypeById(ids[index]);
                }
                else{
                    points = this.thinkEnemyLevelsInOneLevel(depth, maxDepth);
                }
                pointsList.push(points);
                possiblePositionsAfterThinking.push(myPossiblePosition.toMoveAndEat[i2]);
                possibleSwitchTypesAfterThinking.push(switchedType);
                possibleSoldiersAfterThinking.push(mySoldiers[i].getUniqueId());
                mySoldiers[i].setIntendedPosition(prevPosition);
            }
            for (let i2 = 0; i2 < myPossiblePosition.toCastling.length; i2++) {
                let prevPosition = new Position().from(mySoldiers[i].getIntendedPosition());
                mySoldiers[i].setIntendedPosition(myPossiblePosition.toCastling[i2]);
                mySoldiers[i].game.moveInThinking(myPossiblePosition.toCastling[i2], false, true, mySoldiers[i]);
                let points = this.thinkEnemyLevelsInOneLevel(depth, maxDepth);
                pointsList.push(points);
                possiblePositionsAfterThinking.push(myPossiblePosition.toCastling[i2]);
                possibleSwitchTypesAfterThinking.push(null);
                possibleSoldiersAfterThinking.push(mySoldiers[i].getUniqueId());
                mySoldiers[i].setIntendedPosition(prevPosition);
            }
        }
        let index2 = getRandomIndexOf(pointsList, getMaxValueOfArray(pointsList));
        this.nnn = possibleSoldiersAfterThinking;
        this.nextBotSoldierUniqueId = possibleSoldiersAfterThinking[index2];
        this.nextBotPosition = possiblePositionsAfterThinking[index2];
        this.nextBotType = possibleSwitchTypesAfterThinking[index2];
        return getMaxValueOfArray(pointsList);
    }

    thinkEnemyLevelsInOneLevel(depth, maxDepth) {
        depth = depth + 1;
        let isLastLevel = depth === maxDepth;
        let enemySoldiers = this.getTheOtherPlayerObj().soldiers;
        let pointsList = [];
        for (let i = 0; i < enemySoldiers.length; i++) {
            if (!isNotNull(enemySoldiers[i].getIntendedPosition())) {
                continue;
            }
            let enemyPossiblePosition = enemySoldiers[i].getPossiblePositionsToMove(false, true);// by tmp position
            for (let i2 = 0; i2 < enemyPossiblePosition.toJustMove.length; i2++) {
                let prevPosition = new Position().from(enemySoldiers[i].getIntendedPosition());
                enemySoldiers[i].setIntendedPosition(enemyPossiblePosition.toJustMove[i2]);
                let canChangeType = enemySoldiers[i].game.moveInThinking(enemyPossiblePosition.toJustMove[i2], false, false, enemySoldiers[i]);
                let points;
                if (canChangeType) {
                    let ids = Soldier.SOLDIERS_TYPES_TO_UPGRADE;
                    let pointsList2 = [];
                    for (let i3 = 0; i3 < ids.length; i3++) {
                        enemySoldiers[i].changeIntendedSoldierTo(Soldier.getSoldierTypeById(ids[i]));
                        if (isLastLevel) {
                            pointsList2.push(this.getPointsInOneThinkingLevel());
                        }
                        else{
                            pointsList2.push(this.thinkMyLevelsInOneLevel(depth, maxDepth));
                        }
                    }
                    points = getMinValueOfArray(pointsList2);
                    let index = getRandomIndexOf(pointsList2, points);
                    enemySoldiers[i].changeIntendedSoldierTo(Soldier.getSoldierTypeById(ids[index]));
                }
                else{
                    if (isLastLevel) {
                        points = this.getPointsInOneThinkingLevel();
                    }
                    else{
                        points = this.thinkMyLevelsInOneLevel(depth, maxDepth);
                    }
                }
                pointsList.push(points);
                enemySoldiers[i].setIntendedPosition(prevPosition);
            }
            for (let i2 = 0; i2 < enemyPossiblePosition.toMoveAndEat.length; i2++) {
                let prevPosition = new Position().from(enemySoldiers[i].getIntendedPosition());
                enemySoldiers[i].setIntendedPosition(enemyPossiblePosition.toMoveAndEat[i2]);
                let canChangeType = enemySoldiers[i].game.moveInThinking(enemyPossiblePosition.toMoveAndEat[i2], true, false, enemySoldiers[i]);
                let points;
                if (canChangeType) {
                    let ids = Soldier.SOLDIERS_TYPES_TO_UPGRADE;
                    let pointsList2 = [];
                    for (let i3 = 0; i3 < ids.length; i3++) {
                        enemySoldiers[i].changeIntendedSoldierTo(Soldier.getSoldierTypeById(ids[i]));
                        if (isLastLevel) {
                            pointsList2.push(this.getPointsInOneThinkingLevel());
                        }
                        else{
                            pointsList2.push(this.thinkMyLevelsInOneLevel(depth, maxDepth));
                        }

                    }
                    points = getMinValueOfArray(pointsList2);
                    let index = getRandomIndexOf(pointsList2, points);
                    enemySoldiers[i].changeIntendedSoldierTo(Soldier.getSoldierTypeById(ids[index]));
                }
                else{
                    if (isLastLevel) {
                        points = this.getPointsInOneThinkingLevel();
                    }
                    else{
                        points = this.thinkMyLevelsInOneLevel(depth, maxDepth);
                    }
                }
                pointsList.push(points);
                enemySoldiers[i].setIntendedPosition(prevPosition);
            }
            for (let i2 = 0; i2 < enemyPossiblePosition.toCastling.length; i2++) {
                let prevPosition = new Position().from(enemySoldiers[i].getIntendedPosition());
                enemySoldiers[i].setIntendedPosition(enemyPossiblePosition.toCastling[i2]);
                enemySoldiers[i].game.moveInThinking(enemyPossiblePosition.toCastling[i2], false, true, enemySoldiers[i]);
                let points;
                if (isLastLevel) {
                    points = this.getPointsInOneThinkingLevel();
                }
                else{
                    points = this.thinkMyLevelsInOneLevel(depth, maxDepth);
                }
                pointsList.push(points);
                enemySoldiers[i].setIntendedPosition(prevPosition);
            }
        }
        return getMinValueOfArray(pointsList);
    }

    getPointsInOneThinkingLevel() {
        let mySoldiers = this.soldiers;
        let points = 0;
        if (mySoldiers[0].getPlayerObject().getIntendedStatus() === Player.STATUS.DEAD) {
            return points;
        }
        if (this.king.getIntendedStatus() === Soldier.STATUS.SAFE) {
            points += 10;
        }
        for (let i = 0; i < mySoldiers.length; i++) {
            if (!isNotNull(mySoldiers[i].getIntendedPosition())) {
                continue;
            }
            let type = mySoldiers[i].getTypeIntended();
            let extraPoints;
            switch (type) {
                case Soldier.TYPES.SIMPLE:
                    let row = mySoldiers[i].getIntendedPosition().row;
                    let index = Game.rowsKeys[6].indexOf(row);
                    if (index === 6) {
                        extraPoints = 40;
                    }
                    else if (index === 5) {
                        extraPoints = 30;
                    }
                    else {
                        extraPoints = 10;
                    }
                    break;
                case Soldier.TYPES.FOU:
                case Soldier.TYPES.TOUR:
                    extraPoints = 30;
                    break;
                case Soldier.TYPES.HORS:
                    extraPoints = 40;
                    break;
                case Soldier.TYPES.QUEEN:
                    extraPoints = 80;
                    break;
                default:
                    extraPoints = 0;
                    break;
            }
            points += extraPoints;
        }
        return points;
    }
}