
const RPC = require('discord-rpc');
const clientId = '1295777719216246794';
const rpc = new RPC.Client({ transport: 'ipc' });

RPC.register(clientId);

async function setActivity() {
    if (!rpc) return;

    // Set custom activity, customizable time
    rpc.setActivity({
        details: undefined,
        state: "ballin",
        startTimestamp: 1728501278,
        largeImageKey: 'asset', // upload this asset in the Dev Portal
        largeImageText: 'baller',
        smallImageKey: undefined,
        smallImageText: undefined,
        instance: false,
    });
}

rpc.on('ready', () => {
    setActivity();

    // Update
    setInterval(() => {
        setActivity();
    }, 2 * 1000); //any
});

rpc.login({ clientId }).catch(console.error);

