{/* <pre id="output"></pre> */}

var List = Immutable.List;
var Map = Immutable.Map;

function partition(size, coll) {
    var res = [];
    for (var i = 0, l = coll.size || coll.length; i < l; i += size) {
        res.push(coll.slice(i, i + size));
    }
    return Immutable.fromJS(res);
}

function identity(v) {
    return v;
}

function prop(n) {
    return function (object) {
        return object instanceof Map ? object.get(n) : object[n];
    };
}

function keep(list, pred) {
    return list.map(pred).filter(identity);
}

function repeat(n, val) {
    const res = [];
    while (n--) {
        res.push(val);
    }
    return List(res);
}

function shuffle(list) {
    return list.sort(function () {
        return Math.random() - 0.5;
    });
}

function initTiles(rows, cols, mines) {
    return shuffle(
        repeat(mines, Map({isMine: true, isRevealed: false})).concat(
            repeat(rows * cols - mines, Map({isRevealed: false}))
        )
    ).map(function (tile, idx) {
        return tile.set("id", idx);
    });
}

function onWEdge(game, tile) {
    return tile % game.get("cols") === 0;
}

function onEEdge(game, tile) {
    return tile % game.get("cols") === game.get("cols") - 1;
}

function idx(game, tile) {
    if (tile < 0) {
        return null;
    }
    return game.getIn(["tiles", tile]) ? tile : null;
}

function nw(game, tile) {
    return onWEdge(game, tile) ? null : idx(game, tile - game.get("cols") - 1);
}

function n(game, tile) {
    return idx(game, tile - game.get("cols"));
}

function ne(game, tile) {
    return onEEdge(game, tile) ? null : idx(game, tile - game.get("cols") + 1);
}

function e(game, tile) {
    return onEEdge(game, tile) ? null : idx(game, tile + 1);
}

function se(game, tile) {
    return onEEdge(game, tile) ? null : idx(game, tile + game.get("cols") + 1);
}

function s(game, tile) {
    return idx(game, tile + game.get("cols"));
}

function sw(game, tile) {
    return onWEdge(game, tile) ? null : idx(game, tile + game.get("cols") - 1);
}

function w(game, tile) {
    return onWEdge(game, tile) ? null : idx(game, tile - 1);
}

const directions = [nw, n, ne, e, se, s, sw, w];

function neighbours(game, tile) {
    return keep(directions, function (dir) {
        return game.getIn(["tiles", dir(game, tile)]);
    });
}

function getMineCount(game, tile) {
    var nbs = neighbours(game, tile);
    return nbs.filter(prop("isMine")).length;
}

function isMine(game, tile) {
    return game.getIn(["tiles", tile, "isMine"]);
}

function isSafe(game) {
    const tiles = game.get("tiles");
    const mines = tiles.filter(prop("isMine"));
    return (
        mines.filter(prop("isRevealed")) === 0 &&
        tiles.length - mines.length === tiles.filter(prop("isRevealed")).length
    );
}

function isGameOver(game) {
    return isSafe(game) || game.get("isDead");
}

function addThreatCount(game, tile) {
    return game.setIn(["tiles", tile, "threatCount"], getMineCount(game, tile));
}

function revealAdjacentSafeTiles(game, tile) {
    if (isMine(game, tile)) {
        return game;
    }
    game = addThreatCount(game, tile).setIn(
        ["tiles", tile, "isRevealed"],
        true
    );
    if (game.getIn(["tiles", tile, "threatCount"]) === 0) {
        return keep(directions, function (dir) {
            return dir(game, tile);
        }).reduce(function (game, pos) {
            return !game.getIn(["tiles", pos, "isRevealed"])
                ? revealAdjacentSafeTiles(game, pos)
                : game;
        }, game);
    }
    return game;
}

function attemptWinning(game) {
    return isSafe(game) ? game.set("isSafe", true) : game;
}

function revealMine(tile) {
    return tile.get("isMine") ? tile.set("isRevealed", true) : tile;
}

function revealMines(game) {
    return game.updateIn(["tiles"], function (tiles) {
        return tiles.map(revealMine);
    });
}

function revealTile(game, tile) {
    const updated = !game.getIn(["tiles", tile])
        ? game
        : game.setIn(["tiles", tile, "isRevealed"], true);
    return isMine(updated, tile)
        ? revealMines(updated.set("isDead", true))
        : attemptWinning(revealAdjacentSafeTiles(updated, tile));
}

function createGame(options) {
    return Immutable.fromJS({
        cols: options.cols,
        rows: options.rows,
        tiles: initTiles(options.rows, options.cols, options.mines),
    });
}

function log(data) {
    document.querySelector("#output").innerHTML +=
        JSON.stringify(data.toJS()) + "\n";
}

// Example usage
var game = createGame({cols: 3, rows: 3, mines: 2});
log(game);
var updated = revealTile(game, 0);
log(updated);