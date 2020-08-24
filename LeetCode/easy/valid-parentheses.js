var isValid = function (s) {
    if (s.length % 2 == 0) return false
    let map = {
        "(": ")",
        "[": "]",
        "{": "}"
    }
    let res = []
    for (let i = 0; i < s.length; i++) {
        if (map[s[i]]) {
            res.push(s[i])
        } else {
            if (map[res.pop()] != s[i]) return false

        }
    }
    return res.length === 0 //防止全部为左括号
};


var isValid = function (s) {
    const stack = [];
    for (let i = 0; i < s.length; i++) {
        let c = s[i];
        switch (c) {
            case '(':
                stack.push(')');
                break;
            case '[':
                stack.push(']');
                break;
            case '{':
                stack.push('}');
                break;
            default:
                if (c !== stack.pop()) {
                    return false;
                }
        }
    }
    return stack.length === 0;
};
