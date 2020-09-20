export default [{
    "id": "1",
    "name": "Siddhant",
    "familyName":"Dhandarfale",
    "level": 0,
    "relation": "person",
    "gender": "Male",
    "totalMembers" : 5,
    "family": [
        {
            "name": "Shrikant",
            "gender": "male",
            "relation": "father",
            "level": 1,
            "family": [
                {
                    "name": "manohar",
                    "relation": "father",
                    "level": 2,
                    "gender": "male",
                    "family": [
                        {
                            "name": "abc",
                            "relation": "father",
                            "level": 2,
                            "gender": "male"
                        },
                        {
                            "name": "xyz",
                            "relation": "father",
                            "level": 2,
                            "gender": "female"
                        }
                    ]
                },
                {
                    "name": "shanta",
                    "level": 2,
                    "relation": "mother",
                    "gender": "female",
                    "family": [
                        {
                            "name": "abc",
                            "relation": "father",
                            "level": 2,
                            "gender": "male"
                        },
                        {
                            "name": "xyz",
                            "relation": "father",
                            "level": 2,
                            "gender": "female"
                        }
                    ]

                }
            ]
        },

        {
            "name": "arti",
            "gender": "female",
            "relation": "mother",
            "level": 1,
            "family": [
                {
                    "name": "vasudev",
                    "relation": "father",
                    "level": 2,
                    "gender": "male",
                    "family": [
                        {
                            "name": "abc",
                            "relation": "father",
                            "level": 2,
                            "gender": "male"
                        },
                        {
                            "name": "xyz",
                            "relation": "father",
                            "level": 2,
                            "gender": "female"
                        }]
                     },
                    {
                        "name": "vasundhara",
                        "level": "2",
                        "relation": "mother",
                        "gender": "female",
                        "family": [
                            {
                                "name": "abc",
                                "relation": "father",
                                "level": 2,
                                "gender": "male"
                            },
                            {
                                "name": "xyz",
                                "relation": "father",
                                "level": 2,
                                "gender": "female"
                            }]
                    }
            ]
        }

    ]
}
]