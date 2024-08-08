db.createUser(
    {
        user : "admin",
        pwd : "test*2024",
        roles : [
            {
                role : "readWrite",
                db : "dbtest"
            }
        ]
    }
)