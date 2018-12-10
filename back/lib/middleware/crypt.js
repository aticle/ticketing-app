const bcrypt = require('bcryptjs');

module.exports = {
    hash: (password) => {
        const salt = bcrypt.genSaltSync(10);

        return bcrypt.hashSync(password, salt);
    },
    compare: (password, hash) => bcrypt.compareSync(password, hash)
}
