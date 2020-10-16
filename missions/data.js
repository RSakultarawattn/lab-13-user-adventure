export default [
    {
        id: 'palpatine',
        title: 'The Emperors New Clothes',
        mapImage: 'coruscant.jpg',
        map: {
            top: '89%',
            left: '44%'
        },
        image: 'coruscant2.jpg',
        description: `
            You enter a laundry on coruscant only to be confronted with Palpatine's dry cleaning, 
                 and it looks creepy. What do you do?
        `,
        choices: [
            {
                id: 'negotiate',
                description: 'Negotiate with them',
                result: `
            Knowing the fame of the emperor, you offer to sell them his robes
        `,
                hp: 0,
                credits: 35
            }, {
                id: 'fight',
                description: 'Fiiiiiggghhhttt!',
                result: `
            Brandishing your light saber you steal the emperor's clothes, and keep the credits he gave you to pay 
            for them.
        `,
                hp: -30,
                credits: 50
            }, {
                id: 'wipe',
                description: 'use the robes for toilet paper, and flee the galaxy',
                result: `
            As you make a dash for the door the imperial guard cuts you in half.
        `,
                hp: -50,
                credits: 0
            }
        ]
    },
    {
        id: 'jabba',
        title: 'Jabbasize',
        mapImage: 'Tatooine_planet.jpg',
        map: {
            top: '17%',
            left: '37%'
        },
        image: 'jabba.jpg',
        audio: 'dragon.wav',
        action: 'dragon-growl.aiff',
        description: `
        You travel to Tatooine where Jabba the Hut is doing aerobics, and nearby
        residents fear the quakes that have been created as a result. They are asking
        for your help. What do you do?
    `,
        choices: [
            {
                id: 'run',
                description: 'Get off planet before a starving Jabba decides you are dinner',
                result: `
            You high tail it in the opposite direction. Luckily,
            in the panic you find a bag on the ground with 15 credits.
            Unluckily, you trip over a discarded land speeder on your
            way off the planet. 
        `,
                hp: -35,
                credits: 35
            }, {
                id: 'fight',
                description: 'Fiiiiiggghhhttt!',
                result: `
            You attempt to charge towards the giant hut. You bounce off the Hut, and crack your
            skull.
        `,
                hp: -45,
                credits: 0
            }, {
                id: 'detonator',
                description: 'toss in a thermal detonator',
                result: `
            You throw a thermal detonator into Jabba's chamber just as he's Jabbasizing and blow that fat slug across
            the galaxy.
        `,
                hp: 0,
                credits: 90
            }]
    },
    {
        id: 'luke',
        title: 'The Whining',
        mapImage: 'dagobah.jpg',
        map: {
            top: '31%',
            left: '5%'
        },
        prerequisites: ['palpatine', 'jabba'],
        image: 'dagobah2.jpg',
        audio: 'treasure-chests.wav',
        action: 'chest-opening.wav',
        description: `
        As you land on Dagobah you encounter Luke Skywalker who is whining so loudly about absolutely nothing 
        that he falls headlong into the swamp.  What do you do?
    `,
        choices: [{
            id: 'help',
            description: 'You help him out of the swamp',
            result: 'You grab 40 credits!',
            hp: 0,
            credits: 40
        }, {
            id: 'blame',
            description: 'Blame yoda for his behavior, and punt him into the trees',
            result: 'Oh no! Yoda stops in mid air and uses the force to throw sticks and stones at you and you take 50 hp damage',
            hp: -50,
            credits: 0
        }, {
            id: 'push',
            description: 'put your foot on his head, and help him drown',
            result: 'A warm light engulfs you and you gain 35 hp',
            hp: 35,
            credits: 0
        }]
    }
];
