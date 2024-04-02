const [id, level] = require("fs").readFileSync(0).toString().trim().split(" ");

class user {
    constructor(id = "codetree", level = 10){
        this.id = id;
        this.level = level;
    }
}

const user1 = new user()
console.log(`user ${user1.id} lv ${user1.level}`);

const user2 = new user(id, level);
console.log(`user ${user2.id} lv ${user2.level}`);