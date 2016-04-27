Schemas = {};
Schemas.Channels = new SimpleSchema({
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

Channels.attachSchema(Schemas.Channels);
