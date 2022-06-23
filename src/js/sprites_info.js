export default [
    {
        name: "grass",
        img: "/assets/images/grass.png",

        cell: {
            w: 16,
            h: 16
        },

        info: [
            { name: "grass_1", x: 2, y: 0 },
            { name: "grass_2", x: 1, y: 0 },
            { name: "grass_3", x: 5, y: 0 },

            { name: "grass_top", x: 2, y: 3 },
            { name: "grass_bottom", x: 2, y: 5 },
            { name: "grass_left", x: 1, y: 4 },
            { name: "grass_right", x: 3, y: 4 },
            { name: "grass_top_left", x: 1, y: 3 },
            { name: "grass_top_right", x: 3, y: 3 },
            { name: "grass_bottom_right", x: 3, y: 5 },
            { name: "grass_bottom_left", x: 1, y: 5 },
        ]
    },

    {
        name: "character",
        img: "/assets/images/character.png",

        cell: {
            w: 48,
            h: 48
        },

        info: [
            { name: "down_1", x: 0, y: 0 },
            { name: "down_2", x: 1, y: 0 },
            { name: "down_3", x: 2, y: 0 },
            { name: "down_4", x: 3, y: 0 },

            { name: "up_1", x: 0, y: 1 },
            { name: "up_2", x: 1, y: 1 },
            { name: "up_3", x: 2, y: 1 },
            { name: "up_4", x: 3, y: 1 },

            { name: "left_1", x: 0, y: 2 },
            { name: "left_2", x: 1, y: 2 },
            { name: "left_3", x: 2, y: 2 },
            { name: "left_4", x: 3, y: 2 },

            { name: "right_1", x: 0, y: 3 },
            { name: "right_2", x: 1, y: 3 },
            { name: "right_3", x: 2, y: 3 },
            { name: "right_4", x: 3, y: 3 },
        ]
    },

    {

        name: "things",
        img: "/assets/images/things.png",

        cell: {
            w: 16,
            h: 16
        },

        info: [
            { name: "stone", x: 8, y: 1 },
            { name: "apple", x: 0, y: 2 },
            { name: "box", x: 1, y: 3 },
            { name: "box_target", x: 0, y: 3 },
        ]
    }
]