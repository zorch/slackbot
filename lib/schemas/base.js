BaseSchema = new SimpleSchema({
    createDate: {
        type: Date,
        autoValue:function() { 
            if (this.isInsert) {
              return new Date();
            } else if (this.isUpsert) {
                return {$setOnInsert: new Date()};
            } else {
                this.unset();
            } 
        }
    },
    updateDate: {
        type: Date,
        autoValue:function(){ return new Date(); }
    },
    updateBy: {
        type: String,
        autoValue:function(){ return this.userId || "1"; }
    },
    createBy: {
        type: String,
        autoValue:function() { 
            if (this.isInsert)
                return this.userId || "1"; 
            else
                this.unset();
        }
    },
    active: {
        type: Number,
        autoValue: function(){ return 1; }
    }
});
