// since we're using task name as a hash, if task name string changes we'll
// have to manually map it to the old hash to keep user's progress state
const ID_OVERRIDES = [];

function mapTaskToId(taskName) {
    if (ID_OVERRIDES[taskName]) {
        return ID_OVERRIDES[taskName];
    }

    // copypasta from https://stackoverflow.com/questions/6122571/simple-non-secure-hash-function-for-javascript
    var hash = 0;
    for (var i = 0; i < this.length; i++) {
        var char = this.charCodeAt(i);
        hash = (hash << 5) - hash + char;
        hash = hash & hash; // Convert to 32bit integer
    }
    return hash;
}

exports.mapTaskToId = mapTaskToId;
