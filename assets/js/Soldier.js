// noinspection JSUnusedGlobalSymbols
class Soldier {
    static SOLDIERS = {
        SIMPLE_A:"0",
        SIMPLE_B:"1",
        SIMPLE_C:"2",
        SIMPLE_D:"3",
        SIMPLE_E:"4",
        SIMPLE_F:"5",
        SIMPLE_G:"6",
        SIMPLE_H:"7",
        TOUR_A:"8",
        TOUR_H:"9",
        KING:"10",
        QUEEN:"11",
        HORS_B:"12",
        HORS_G:"13",
        FOU_C:"14",
        FOU_F:"15"
    };
    static TYPES = {
        SIMPLE:"0",
        TOUR:"1",
        KING:"2",
        QUEEN:"3",
        HORS:"4",
        FOU:"5"
    };
    static SOLDIERS_TYPES = [
        {
            id:Soldier.SOLDIERS.SIMPLE_A,
            type: Soldier.TYPES.SIMPLE
        },
        {
            id:Soldier.SOLDIERS.SIMPLE_B,
            type: Soldier.TYPES.SIMPLE
        },
        {
            id:Soldier.SOLDIERS.SIMPLE_C,
            type: Soldier.TYPES.SIMPLE
        },
        {
            id:Soldier.SOLDIERS.SIMPLE_D,
            type: Soldier.TYPES.SIMPLE
        },
        {
            id:Soldier.SOLDIERS.SIMPLE_E,
            type: Soldier.TYPES.SIMPLE
        },
        {
            id:Soldier.SOLDIERS.SIMPLE_F,
            type: Soldier.TYPES.SIMPLE
        },
        {
            id:Soldier.SOLDIERS.SIMPLE_G,
            type: Soldier.TYPES.SIMPLE
        },
        {
            id:Soldier.SOLDIERS.SIMPLE_H,
            type: Soldier.TYPES.SIMPLE
        },
        {
            id:Soldier.SOLDIERS.TOUR_A,
            type: Soldier.TYPES.TOUR
        },
        {
            id:Soldier.SOLDIERS.TOUR_H,
            type: Soldier.TYPES.TOUR
        },
        {
            id:Soldier.SOLDIERS.KING,
            type: Soldier.TYPES.KING
        },
        {
            id:Soldier.SOLDIERS.QUEEN,
            type: Soldier.TYPES.QUEEN
        },
        {
            id:Soldier.SOLDIERS.HORS_B,
            type: Soldier.TYPES.HORS
        },
        {
            id:Soldier.SOLDIERS.HORS_G,
            type: Soldier.TYPES.HORS
        },
        {
            id:Soldier.SOLDIERS.FOU_C,
            type: Soldier.TYPES.FOU
        },
        {
            id:Soldier.SOLDIERS.FOU_F,
            type: Soldier.TYPES.FOU
        }
    ];
    static SOLDIERS_PLACES = [
        {
            id:Soldier.SOLDIERS.SIMPLE_A,
            initialPos:{
                column: "A",
                row: ["2", "7"]
            }
        },
        {
            id:Soldier.SOLDIERS.SIMPLE_B,
            initialPos:{
                column: "B",
                row: ["2", "7"]
            }
        },
        {
            id:Soldier.SOLDIERS.SIMPLE_C,
            initialPos:{
                column: "C",
                row: ["2", "7"]
            }
        },
        {
            id:Soldier.SOLDIERS.SIMPLE_D,
            initialPos:{
                column: "D",
                row: ["2", "7"]
            }
        },
        {
            id:Soldier.SOLDIERS.SIMPLE_E,
            initialPos:{
                column: "E",
                row: ["2", "7"]
            }
        },
        {
            id:Soldier.SOLDIERS.SIMPLE_F,
            initialPos:{
                column: "F",
                row: ["2", "7"]
            }
        },
        {
            id:Soldier.SOLDIERS.SIMPLE_G,
            initialPos:{
                column: "G",
                row: ["2", "7"]
            }
        },
        {
            id:Soldier.SOLDIERS.SIMPLE_H,
            initialPos:{
                column: "H",
                row: ["2", "7"]
            }
        },
        {
            id:Soldier.SOLDIERS.TOUR_A,
            initialPos:{
                column: "A",
                row: ["1", "8"]
            }
        },
        {
            id:Soldier.SOLDIERS.TOUR_H,
            initialPos:{
                column: "H",
                row: ["1", "8"]
            }
        },
        {
            id:Soldier.SOLDIERS.KING,
            initialPos:{
                column: "E",
                row: ["1", "8"]
            }
        },
        {
            id:Soldier.SOLDIERS.QUEEN,
            initialPos:{
                column: "D",
                row: ["1", "8"]
            }
        },
        {
            id:Soldier.SOLDIERS.HORS_B,
            initialPos:{
                column: "B",
                row: ["1", "8"]
            }
        },
        {
            id:Soldier.SOLDIERS.HORS_G,
            initialPos:{
                column: "G",
                row: ["1", "8"]
            }
        },
        {
            id:Soldier.SOLDIERS.FOU_C,
            initialPos:{
                column: "C",
                row: ["1", "8"]
            }
        },
        {
            id:Soldier.SOLDIERS.FOU_F,
            initialPos:{
                column: "F",
                row: ["1", "8"]
            }
        }
    ];
    static SOLDIERS_IMGS = [
        {
            id:Soldier.SOLDIERS.SIMPLE_A,
            imgName: ["SIMPLE_1.png", "SIMPLE_2.png"]
        },
        {
            id:Soldier.SOLDIERS.SIMPLE_B,
            imgName: ["SIMPLE_1.png", "SIMPLE_2.png"]
        },
        {
            id:Soldier.SOLDIERS.SIMPLE_C,
            imgName: ["SIMPLE_1.png", "SIMPLE_2.png"]
        },
        {
            id:Soldier.SOLDIERS.SIMPLE_D,
            imgName: ["SIMPLE_1.png", "SIMPLE_2.png"]
        },
        {
            id:Soldier.SOLDIERS.SIMPLE_E,
            imgName: ["SIMPLE_1.png", "SIMPLE_2.png"]
        },
        {
            id:Soldier.SOLDIERS.SIMPLE_F,
            imgName: ["SIMPLE_1.png", "SIMPLE_2.png"]
        },
        {
            id:Soldier.SOLDIERS.SIMPLE_G,
            imgName: ["SIMPLE_1.png", "SIMPLE_2.png"]
        },
        {
            id:Soldier.SOLDIERS.SIMPLE_H,
            imgName: ["SIMPLE_1.png", "SIMPLE_2.png"]
        },
        {
            id:Soldier.SOLDIERS.TOUR_A,
            imgName: ["TOUR_1.png", "TOUR_2.png"]
        },
        {
            id:Soldier.SOLDIERS.TOUR_H,
            imgName: ["TOUR_1.png", "TOUR_2.png"]
        },
        {
            id:Soldier.SOLDIERS.KING,
            imgName: ["KING_1.png", "KING_2.png"]
        },
        {
            id:Soldier.SOLDIERS.QUEEN,
            imgName: ["QUEEN_1.png", "QUEEN_2.png"]
        },
        {
            id:Soldier.SOLDIERS.HORS_B,
            imgName: ["HORS_L_1.png", "HORS_L_2.png"]
        },
        {
            id:Soldier.SOLDIERS.HORS_G,
            imgName: ["HORS_R_1.png", "HORS_R_2.png"]
        },
        {
            id:Soldier.SOLDIERS.FOU_C,
            imgName: ["FOU_1.png", "FOU_2.png"]
        },
        {
            id:Soldier.SOLDIERS.FOU_F,
            imgName: ["FOU_1.png", "FOU_2.png"]
        }
    ];
    static MOVEMENT_TYPES = {
        WALK: "0",
        JUMP: "1"
    };
    static STEPS_TYPES = {
        ONE: 1,
        TOW: 2,
        MAX: 10
    };
    static SOLDIERS_MOVES = [
        {
            type:Soldier.TYPES.SIMPLE,
            movementType: Soldier.MOVEMENT_TYPES.WALK,
            moves: {
                directions: {
                    move:[{
                        column: 0,
                        row: +1
                    }],
                    eat:[
                        {
                            column: 1,
                            row: +1
                        },{
                            column: -1,
                            row: +1
                        }
                    ]
                },
                steps: {
                    first:Soldier.STEPS_TYPES.TOW,
                    always:Soldier.STEPS_TYPES.ONE
                }
            }
        },
        {
            type:Soldier.TYPES.TOUR,
            movementType: Soldier.MOVEMENT_TYPES.WALK,
            moves: {
                directions: {
                    move: [
                        {
                            column: 0,
                            row: +1
                        },
                        {
                            column: 1,
                            row: 0
                        },
                        {
                            column: 0,
                            row: -1
                        },
                        {
                            column: -1,
                            row: 0
                        }
                    ],
                    eat : 1
                },
                steps: {
                    always:Soldier.STEPS_TYPES.MAX
                }
            }
        },
        {
            type:Soldier.TYPES.FOU,
            movementType: Soldier.MOVEMENT_TYPES.WALK,
            moves: {
                directions: {
                    move: [
                        {
                            column: 1,
                            row: +1
                        },
                        {
                            column: -1,
                            row: -1
                        },
                        {
                            column: 1,
                            row: -1
                        },
                        {
                            column: -1,
                            row: 1
                        }
                    ],
                    eat : 1
                },
                steps: {
                    always:Soldier.STEPS_TYPES.MAX
                }
            }
        },
        {
            type:Soldier.TYPES.QUEEN,
            movementType: Soldier.MOVEMENT_TYPES.WALK,
            moves: {
                directions: {
                    move: [
                        {
                            column: 1,
                            row: +1
                        },
                        {
                            column: -1,
                            row: -1
                        },
                        {
                            column: 1,
                            row: -1
                        },
                        {
                            column: -1,
                            row: 1
                        },
                        {
                            column: 0,
                            row: +1
                        },
                        {
                            column: 1,
                            row: 0
                        },
                        {
                            column: 0,
                            row: -1
                        },
                        {
                            column: -1,
                            row: 0
                        }
                    ],
                    eat : 1
                },
                steps: {
                    always:Soldier.STEPS_TYPES.MAX
                }
            }
        },
        {
            type:Soldier.TYPES.KING,
            movementType: Soldier.MOVEMENT_TYPES.WALK,
            moves: {
                directions: {
                    move: [
                        {
                            column: 1,
                            row: +1
                        },
                        {
                            column: -1,
                            row: -1
                        },
                        {
                            column: 1,
                            row: -1
                        },
                        {
                            column: -1,
                            row: 1
                        },
                        {
                            column: 0,
                            row: +1
                        },
                        {
                            column: 1,
                            row: 0
                        },
                        {
                            column: 0,
                            row: -1
                        },
                        {
                            column: -1,
                            row: 0
                        }
                    ],
                    eat: 1
                },
                steps: {
                    always:Soldier.STEPS_TYPES.ONE
                }
            }
        },
        {
            type:Soldier.TYPES.HORS,
            movementType: Soldier.MOVEMENT_TYPES.JUMP,
            moves: {
                jumps: [
                    {
                        column: 2,
                        row: 1
                    },
                    {
                        column: -2,
                        row: -1
                    },
                    {
                        column: -2,
                        row: 1
                    },
                    {
                        column: 2,
                        row: -1
                    },
                    {
                        column: 1,
                        row: 2
                    },
                    {
                        column: -1,
                        row: -2
                    },
                    {
                        column: -1,
                        row: 2
                    },
                    {
                        column: 1,
                        row: -2
                    },
                ]
            }
        }
    ];
    static STATUS = {
        IN_DANGER: "0",
        SAFE: "1"
    };
    static COLUMN_TO_CASTLING = [
        {
            tourId: Soldier.SOLDIERS.TOUR_A,
            column: Game.columnsKeys[2],
            columnDist: Game.columnsKeys[3]
        },
        {
            tourId: Soldier.SOLDIERS.TOUR_H,
            column: Game.columnsKeys[6],
            columnDist: Game.columnsKeys[5]
        }
    ];
    static SOLDIERS_TYPES_TO_UPGRADE = [Soldier.SOLDIERS.QUEEN, Soldier.SOLDIERS.TOUR_A, Soldier.SOLDIERS.FOU_C, Soldier.SOLDIERS.HORS_B];

    constructor(id, playerId, game) {
        this.id = id;
        this.playerId = playerId;
        this.game = game;
        this.type = Soldier.getSoldierTypeById(id);
        this.uniqueId = generateUniqueId();
        this.movementsCount = 0;
        this.possiblePositionsToMove = null;
        this.status = Soldier.STATUS.SAFE;
    }

    getId() {
        return this.id;
    }

    setId(id) {
        this.id = id;
    }

    setIdIntended(id) {
        this.idIntended = id;
    }

    getIdIntended() {
        return this.idIntended;
    }

    getType() {
        return this.type;
    }

    setType(type) {
        this.type = type;
    }

    getTypeIntended() {
        return this.typeIntended;
    }

    setTypeIntended(type) {
        this.typeIntended = type;
    }

    getPlayerId() {
        return this.playerId;
    }

    getPosition() {
        return this.position;
    }

    setPosition(position) {
        this.position = position;
    }

    increaseMovementsCount() {
        this.movementsCount = this.movementsCount + 1;
    }

    increaseIntendedMovementsCount() {
        if (!isNotNull(this.intendedMovementsCount)) this.intendedMovementsCount = 0;
        this.intendedMovementsCount = this.intendedMovementsCount + 1;
    }

    getUniqueId() {
        return this.uniqueId;
    }

    setPossiblePositionsToMove(skipKingVerification = false, byIntendedPosition = false) {
        let type_;
        if (byIntendedPosition) {
            type_ = this.getTypeIntended();
        }
        else{
            type_ = this.getType();
        }
        let coefficient = (type_ === Soldier.TYPES.SIMPLE ? this.getCoefficientPlayer() : 1);
        let currentPosition = this.getPosition();
        if (!isNotNull(currentPosition)) return;
        let possiblePositions = {
            toJustMove: [],
            toMoveAndEat: [],
            toCastling: []
        };
        let soldierMove = Soldier.getSoldierMove(this.id);
        if (soldierMove.movementType === Soldier.MOVEMENT_TYPES.WALK) {
            for (let i = 0; i < soldierMove.moves.directions.move.length; i++) {
                let oneDirection = soldierMove.moves.directions.move[i];
                let max_steps;
                if (isNotNull(soldierMove.moves.steps.first) && this.isItTheFirstMove()) {
                    max_steps = soldierMove.moves.steps.first;
                }
                else{
                    max_steps = soldierMove.moves.steps.always;
                }
                for (let i2 = 1; i2 <= max_steps; i2++) {
                    let newColumnTest = oneDirection.column * i2 + Game.columnsKeys.indexOf(currentPosition.column);
                    let newRowTest = oneDirection.row * i2 * coefficient + Game.rowsKeys.indexOf(currentPosition.row);
                    if (newColumnTest >= 0 && newColumnTest < Game.columnsKeys.length && newRowTest >= 0 && newRowTest < Game.rowsKeys.length) {
                        let newPosition = {
                            column: Game.columnsKeys[newColumnTest],
                            row: Game.rowsKeys[newRowTest]
                        };
                        let fieldCheck = this.checkIfAnyStoneIsOnPosition(newPosition, byIntendedPosition);
                        if (!fieldCheck[0]) {
                            if (skipKingVerification) {
                                possiblePositions.toJustMove.push(newPosition);
                            }
                            else {
                                this.setTmpPosition(newPosition);
                                let isDanger = this.game.checkIfKingIsInDanger(this.playerId, byIntendedPosition);
                                this.removeTmpPosition();
                                if (!isDanger) {
                                    possiblePositions.toJustMove.push(newPosition);
                                }
                            }

                        }
                        else if (fieldCheck[1] !== this.playerId && soldierMove.moves.directions.eat === 1) {
                            if (skipKingVerification) {
                                possiblePositions.toMoveAndEat.push(newPosition);
                            }
                            else {
                                let enemySoldier = this.game.getSoldierByCords(newPosition, false, byIntendedPosition);
                                if (isNotNull(enemySoldier)) {
                                    enemySoldier.setTmpPosition(null);
                                }
                                this.setTmpPosition(newPosition);
                                let isDanger = this.game.checkIfKingIsInDanger(this.playerId, byIntendedPosition);
                                this.removeTmpPosition();
                                if (isNotNull(enemySoldier)) {
                                    enemySoldier.removeTmpPosition();
                                }
                                if (!isDanger) {
                                    possiblePositions.toMoveAndEat.push(newPosition);
                                }
                            }
                            break;
                        }
                        else{
                            break;
                        }
                    }
                }
            }
            if (this.getType() === Soldier.TYPES.KING) {
                let positionsToCastling = this.checkIfSoldierIsKingAndCanCastling(byIntendedPosition);
                if (isNotNull(positionsToCastling)) {
                    for (let i = 0; i < positionsToCastling.length; i++) {
                        let fieldCheck = this.checkIfAnyStoneIsOnPosition(positionsToCastling[i], byIntendedPosition);
                        if (!fieldCheck[0]) {
                            if (skipKingVerification) {
                                possiblePositions.toCastling.push(positionsToCastling[i]);
                            } else {
                                this.setTmpPosition(positionsToCastling[i]);
                                let isDanger = this.game.checkIfKingIsInDanger(this.playerId, byIntendedPosition);
                                this.removeTmpPosition();
                                if (!isDanger) {
                                    possiblePositions.toCastling.push(positionsToCastling[i]);
                                }
                            }

                        }
                    }
                }
            }
            if (soldierMove.moves.directions.eat !== 1) {
                for (let i = 0; i < soldierMove.moves.directions.eat.length; i++) {
                    let oneDirection = soldierMove.moves.directions.eat[i];
                    let max_steps;
                    max_steps = soldierMove.moves.steps.always;
                    for (let i2 = 1; i2 <= max_steps; i2++) {
                        let newColumnTest = oneDirection.column * i2 + Game.columnsKeys.indexOf(currentPosition.column);
                        let newRowTest = oneDirection.row * i2 * coefficient + Game.rowsKeys.indexOf(currentPosition.row);
                        if (newColumnTest >= 0 && newColumnTest < Game.columnsKeys.length && newRowTest >= 0 && newRowTest < Game.rowsKeys.length) {
                            let newPosition = {
                                column: Game.columnsKeys[newColumnTest],
                                row: Game.rowsKeys[newRowTest]
                            };
                            let fieldCheck = this.checkIfAnyStoneIsOnPosition(newPosition, byIntendedPosition);
                            if (fieldCheck[0] && fieldCheck[1] !== this.playerId) {
                                if (skipKingVerification) {
                                    possiblePositions.toMoveAndEat.push(newPosition);
                                }
                                else {
                                    let enemySoldier = this.game.getSoldierByCords(newPosition, false, byIntendedPosition);
                                    if (isNotNull(enemySoldier)) {
                                        enemySoldier.setTmpPosition(null);
                                    }
                                    this.setTmpPosition(newPosition);
                                    let isDanger = this.game.checkIfKingIsInDanger(this.playerId, byIntendedPosition);
                                    this.removeTmpPosition();
                                    if (isNotNull(enemySoldier)) {
                                        enemySoldier.removeTmpPosition();
                                    }
                                    if (!isDanger) {
                                        possiblePositions.toMoveAndEat.push(newPosition);
                                    }
                                }
                                break;
                            }
                        }
                    }
                }
            }
        }
        else if (soldierMove.movementType === Soldier.MOVEMENT_TYPES.JUMP) {
            for (let i = 0; i < soldierMove.moves.jumps.length; i++) {
                let oneJump = soldierMove.moves.jumps[i];
                let newColumnTest = oneJump.column + Game.columnsKeys.indexOf(currentPosition.column);
                let newRowTest = oneJump.row + Game.rowsKeys.indexOf(currentPosition.row);
                if (newColumnTest >= 0 && newColumnTest < Game.columnsKeys.length && newRowTest >= 0 && newRowTest < Game.rowsKeys.length) {
                    let newPosition = {
                        column: Game.columnsKeys[newColumnTest],
                        row: Game.rowsKeys[newRowTest]
                    };
                    let fieldCheck = this.checkIfAnyStoneIsOnPosition(newPosition, byIntendedPosition);
                    if (!fieldCheck[0]) {
                        if (skipKingVerification) {
                            possiblePositions.toJustMove.push(newPosition);
                        }
                        else {
                            this.setTmpPosition(newPosition);
                            let isDanger = this.game.checkIfKingIsInDanger(this.playerId, byIntendedPosition);
                            this.removeTmpPosition();
                            if (!isDanger) {
                                possiblePositions.toJustMove.push(newPosition);
                            }
                        }
                    }
                    else if (fieldCheck[1] !== this.playerId) {
                        if (skipKingVerification) {
                            possiblePositions.toMoveAndEat.push(newPosition);
                        }
                        else {
                            let enemySoldier = this.game.getSoldierByCords(newPosition, false, byIntendedPosition);
                            if (isNotNull(enemySoldier)) {
                                enemySoldier.setTmpPosition(null);
                            }
                            this.setTmpPosition(newPosition);
                            let isDanger = this.game.checkIfKingIsInDanger(this.playerId, byIntendedPosition);
                            this.removeTmpPosition();
                            if (isNotNull(enemySoldier)) {
                                enemySoldier.removeTmpPosition();
                            }
                            if (!isDanger) {
                                possiblePositions.toMoveAndEat.push(newPosition);
                            }
                        }
                    }
                }
            }
        }
        return possiblePositions;
    }

    getPossiblePositionsToMove(skipKingVerification = false, byIntendedPosition = false) {
        this.possiblePositionsToMoveCalculatedAtGameProssess = this.game.getGameProcess();
        this.possiblePositionsToMove = this.setPossiblePositionsToMove(skipKingVerification, byIntendedPosition);
        return this.possiblePositionsToMove;
    }

    getMovementsCount() {
        return this.movementsCount;
    }

    getIntendedMovementsCount() {
        if (!isNotNull(this.intendedMovementsCount)) this.intendedMovementsCount = 0;
        return this.intendedMovementsCount;
    }

    isItTheFirstMove() {
        return this.getMovementsCount() === 0;
    }

    createDomElement() {
        let src = "assets/img/soldiers/"+Soldier.getImgName(this.id, this.playerId);
        let initialPos_ = Soldier.getInitialPos(this.id, this.playerId);
        this.position = initialPos_;
        let top = cellHeight*(Game.rowsKeys.indexOf(initialPos_.row));
        let left = cellWidth*(Game.columnsKeys.indexOf(initialPos_.column));
        const ele = $('<div class="one-piece" data-player-id="'+this.playerId+'" data-object-unique-id="'+this.uniqueId+'" style="top: '+top+'px;left: '+left+'px;"><div class="piece-img-parent"><img src="'+src+'" class="soldier-img" alt="'+src+'"></div></div>');
        ele.appendTo($('#soldiers_area'));
        return ele;
    }

    moveSoldierToPosition(position) {
        let top = cellHeight*(Game.rowsKeys.indexOf(position.row));
        let left = cellWidth*(Game.columnsKeys.indexOf(position.column));
        let element = this.getSoldierDom();
        element.removeClass('canHover');
        element.css("top", top+"px");
        element.css("left", left+"px");
        this.setPosition(position);
        this.checkIfSoldierIsSimpleAndMadeTowStepsMove();
        this.possiblePositionsToMove = null;
        this.increaseMovementsCount();
    }

    checkIfSoldierIsSimpleAndMadeTowStepsMove() {
        if (this.getType() === Soldier.TYPES.SIMPLE && this.getMovementsCount() === 0) {
            let newPosition = this.getPosition();
            if (isNotNull(newPosition)) {
                if (newPosition.row === Game.getFourthRowByPlayer(this.getPlayerId())) {
                    this.setTailPositionOnTowMoves();
                    console.log("Tow moves at first");
                    return;
                }
            }
        }
        this.removeTailPosition();
    }

    checkIfSoldierIsKingAndCanCastling(byIntendedPosition = false) {
        let type;
        let movementsCount;
        let status;
        if (!byIntendedPosition) {
            type = this.getType();
            movementsCount = this.getMovementsCount();
            status = this.getStatus();
        }
        else{
            type = this.getTypeIntended();
            movementsCount = this.getIntendedMovementsCount();
            status = this.getIntendedStatus();
        }
        if (type === Soldier.TYPES.KING) {
            let positionsToCastling = [];
            if (movementsCount === 0 && status !== Soldier.STATUS.IN_DANGER) {
                let movementsCount2;
                let movementsCount3;
                if (!byIntendedPosition) {
                    movementsCount2 = this.getPlayerObject().tour_a.getMovementsCount();
                    movementsCount3 = this.getPlayerObject().tour_h.getMovementsCount();
                }
                else{
                    movementsCount2 = this.getPlayerObject().tour_a.getIntendedMovementsCount();
                    movementsCount3 = this.getPlayerObject().tour_h.getIntendedMovementsCount();
                }
                if (movementsCount2 === 0) {
                    let soldierBetween = this.game.getSoldierByCords(new Position(Soldier.getInitialPos(Soldier.SOLDIERS.QUEEN, 0).column, Game.getRowByIndexByPlayer(1, this.getPlayerId())));
                    let soldierBetween2 = this.game.getSoldierByCords(new Position(Soldier.getInitialPos(Soldier.SOLDIERS.HORS_B, 0).column, Game.getRowByIndexByPlayer(1, this.getPlayerId())));
                    if (!isNotNull(soldierBetween) && !isNotNull(soldierBetween2)) {
                        let onePositionToCastling = new Position(Soldier.getColumnToCastlingByTourId(Soldier.SOLDIERS.TOUR_A).column, Game.getRowByIndexByPlayer(1, this.getPlayerId()));
                        positionsToCastling.push(onePositionToCastling);
                    }
                }
                if (movementsCount3 === 0) {
                    let soldierBetween = this.game.getSoldierByCords(new Position(Soldier.getInitialPos(Soldier.SOLDIERS.FOU_F, 0).column, Game.getRowByIndexByPlayer(1, this.getPlayerId())));
                    if (!isNotNull(soldierBetween)) {
                        let onePositionToCastling = new Position(Soldier.getColumnToCastlingByTourId(Soldier.SOLDIERS.TOUR_H).column, Game.getRowByIndexByPlayer(1, this.getPlayerId()));
                        positionsToCastling.push(onePositionToCastling);
                    }
                }
            }
            return positionsToCastling;
        }
        return null;
    }

    setTailPositionOnTowMoves() {
        let tailPosition = new Position().from(this.getPosition());
        tailPosition.row = Game.getRowByIndexByPlayer(3, this.getPlayerId());
        this.tailPosition = tailPosition;
        this.gameProcessToUseThisTail = this.game.getGameProcess() + 1;
    }

    removeTailPosition() {
        if (isNotNull(this.tailPosition)) {
            this.tailPosition = null;
            this.gameProcessToUseThisTail = null;
        }
    }

    getTailPosition() {
        if (this.gameProcessToUseThisTail < this.game.getGameProcess()) {
            this.removeTailPosition();
        }
        return this.tailPosition;
    }

    setOnClick(job) {
        let obj = this;
        let objUniqueId = $('[data-object-unique-id="'+this.uniqueId+'"]');
        objUniqueId.off('click');
        objUniqueId.on('click', function () {
            job(obj);
        });
    }

    getSoldierDom() {
        return $('[data-object-unique-id="'+this.uniqueId+'"]');
    }

    static getImgName(id, playerId) {
        for (let i = 0; i < Soldier.SOLDIERS_IMGS.length; i++) {
            if (Soldier.SOLDIERS_IMGS[i].id === id) {
                return Soldier.SOLDIERS_IMGS[i].imgName[playerId];
            }
        }
    }

    static getInitialPos(id, playerId) {
        for (let i = 0; i < Soldier.SOLDIERS_PLACES.length; i++) {
            if (Soldier.SOLDIERS_PLACES[i].id === id) {
                return {
                    column: Soldier.SOLDIERS_PLACES[i].initialPos.column,
                    row: Soldier.SOLDIERS_PLACES[i].initialPos.row[playerId]
                };
            }
        }
    }

    static getSoldierTypeById(id) {
        for (let i = 0; i < Soldier.SOLDIERS_TYPES.length; i++) {
            if (Soldier.SOLDIERS_TYPES[i].id === id) {
                return Soldier.SOLDIERS_TYPES[i].type;
            }
        }
    }

    static getSoldierIdByType(type) {
        for (let i = 0; i < Soldier.SOLDIERS_TYPES.length; i++) {
            if (Soldier.SOLDIERS_TYPES[i].type === type) {
                return Soldier.SOLDIERS_TYPES[i].id;
            }
        }
    }

    static getSoldierMove(id) {
        let type = Soldier.getSoldierTypeById(id);
        for (let i = 0; i < Soldier.SOLDIERS_MOVES.length; i++) {
            if (Soldier.SOLDIERS_MOVES[i].type === type) {
                return Soldier.SOLDIERS_MOVES[i];
            }
        }
    }

    getCoefficientPlayer() {
        return this.playerId === 0 ? 1 : -1;
    }

    checkIfAnyStoneIsOnPosition(position, byIntendedPosition = false) {
        let soldiers = this.game.player0.soldiers;
        soldiers = soldiers.concat(this.game.player1.soldiers);
        for (let i = 0; i < soldiers.length; i++) {
            let positionTest;
            if (byIntendedPosition) {
                positionTest = soldiers[i].getIntendedPosition();
            }
            else{
                positionTest = soldiers[i].getPosition();
            }
            if (!isNotNull(positionTest)) continue;
            if (positionTest.column === position.column && positionTest.row === position.row) {
                return [true, soldiers[i].getPlayerId()];
            }
            if (soldiers[i].getType() !== Soldier.TYPES.SIMPLE) {
                continue;
            }
            let tailPositionTest = soldiers[i].getTailPosition();
            if (!isNotNull(tailPositionTest)) continue;
            if (tailPositionTest.column === position.column && tailPositionTest.row === position.row) {
                return [true, soldiers[i].getPlayerId()];
            }
        }
        return [false];
    }

    getPlayerObject() {
        if (this.playerId === Game.PLAYER.WHITE) {
            return this.game.player1;
        }
        else{
            return this.game.player0;
        }
    }

    getEnemyPlayerObject() {
        if (this.playerId === Game.PLAYER.WHITE) {
            return this.game.player0;
        }
        else{
            return this.game.player1;
        }
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

    setTmpPosition(tmpPosition) {
        this.realPosition = this.getPosition();
        this.setPosition(tmpPosition);
    }

    setIntendedPosition(intendedPosition) {
        this.intendedPosition = intendedPosition;
    }

    getIntendedPosition() {
        return this.intendedPosition;
    }

    removeTmpPosition() {
        this.setPosition(this.realPosition);
    }

    checkIfSoldierIsSimpleAndGetsTheExtremities(byIntendedPosition = false) {
        if (this.getType() === Soldier.TYPES.SIMPLE) {
            let enemyPlayer = this.getEnemyPlayerObject();
            let extremityRow = Soldier.getInitialPos(Soldier.SOLDIERS.KING, enemyPlayer.id).row;
            if ((!byIntendedPosition && this.getPosition().row === extremityRow) || (byIntendedPosition && this.getIntendedPosition().row === extremityRow)) {
                return true;
            }
        }
        return false;
    }

    changeSoldierTo(type) {
        let newId = Soldier.getSoldierIdByType(type);
        this.setId(newId);
        this.setType(Soldier.getSoldierTypeById(newId));
        let src = "assets/img/soldiers/"+Soldier.getImgName(this.getId(), this.getPlayerId());
        let dom = this.getSoldierDom();
        dom.find('.soldier-img').attr("src", src);
        dom.removeClass("flash");
        dom.addClass("flash");
    }

    changeIntendedSoldierTo(type) {
        let newId = Soldier.getSoldierIdByType(type);
        this.setIdIntended(newId);
        this.setTypeIntended(Soldier.getSoldierTypeById(newId));
    }

    static getColumnToCastlingByTourId(tourId) {
        for (let i = 0; i < Soldier.COLUMN_TO_CASTLING.length; i++) {
            if (Soldier.COLUMN_TO_CASTLING[i].tourId === tourId) {
                return Soldier.COLUMN_TO_CASTLING[i];
            }
        }
        return null;
    }

    static getColumnToCastlingByColumn(column) {
        for (let i = 0; i < Soldier.COLUMN_TO_CASTLING.length; i++) {
            if (Soldier.COLUMN_TO_CASTLING[i].column === column) {
                return Soldier.COLUMN_TO_CASTLING[i];
            }
        }
        return null;
    }
}

class Position{
    constructor(column = null, row = null) {
        this.column = column;
        this.row = row;
    }
    from(position) {
        if (isNotNull(position)) {
            this.column = position.column;
            this.row = position.row;
        }
        else{
            return null;
        }
        return this;
    }
}