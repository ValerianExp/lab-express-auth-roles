const roleValidation = (roles) => (req, res, next) => {
    // STUDENT, DEV, TA, PM
    if (req.session.currentUser && roles.includes(req.session.currentUser.role)) {
        next();
    } else {
        res.redirect('/error');
    }
}

module.exports = {
    roleValidation
}