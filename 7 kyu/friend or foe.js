//filter string to return names with only 4 letters and keep original order
function friend(friends) {
    //arrow function used
    return friends.filter (x => x.length === 4);
}