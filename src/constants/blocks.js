const blocks = {
    Control: [
        {
            text: 'Wait for ^val',
            val: true
        },
        {
            text: 'Repeat ^val for',
            val: true
        }
    ],
    Events: [
        {
            text: 'When $start #icon clicked',
            icon: 'flag',
            val:false
        }
    ],
    Looks: [
        {
            text: 'Say Hello ^val',
            val: true
        },
        {
            text: 'Think Hmmm for ^val',
            val: true
        }
    ],
    Motion: [
        {
            text: 'Move ^val steps',
            val: true
        },
        {
            text: 'Jump',
            val: false
        },
        {
            text: 'Turn $ACW #icon ^val degrees',
            icon: 'undo',
            val: true
        },
        {
            text: 'Turn $CW #icon ^val degrees',
            icon: 'redo',
            val: true
        }
    ]
};

export default blocks;