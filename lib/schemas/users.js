Schemas.Users = new SimpleSchema({
    name: {
        type: String,
        label: ' Nombre '
    },
    id: {
        type: String,
        label: ' id '
    },
    active: {
        type: Boolean,
        label: ' Activo '
    },
    // base: {
    //     type: BaseSchema
    // }
})

Users.attachSchema(Schemas.Users);
