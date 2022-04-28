const Admin = require("../models/mongo/Admin/Admin.model");


exports.adminRegister = async (req, res, next) => {

    const { username, firstName, lastName, email, password, avatar, role } = req.body;
    const admin = await Admin.findOne({ email });

    if (admin) {
        return res.status(400).json({
            success: false,
            error: "El usuario ya existe verificar"
        })
    }
    try {
        const admin = Admin({
            username, firstName, lastName, email, password, avatar, role
        })
        const adminStored = await admin.save()
        console.log(adminStored);
        return res.status(200).json({
            ok: "200",
            body: { username, firstName, lastName, email, password, avatar, role },
        })

    } catch (error) {
        console.log("Error al guardar");
        res.status(500).json({
            bad: "500",
            error
        });
    }
}