// Généralités
export const appName        = 'TerraScan';

// Terra Classic blockchain ("mainnet" of classic)
export const chainName      = 'Terra Classic';
export const chainID        = 'columbus-5';
export const chainLCDurl    = 'https://terra-classic-lcd.publicnode.com';


export const LCDurl    = 'https://terra-classic-lcd.publicnode.com';
export const FCDurl    = 'https://terra-classic-fcd.publicnode.com';
// export const LCDurl    = 'https://lcd.terraclassic.community';
// export const FCDurl    = 'https://fcd.terraclassic.community';
export const TSAPIurl    = 'https://totalsuppliesapi.jtapp.dev/';



// Tableau de correspondance Coin/Désignation
export const tblCorrespondanceValeurs = {
    "uluna": "LUNC",
    "uusd": "USTC",
    "uaud": "AUTC",
    "ucad": "CATC",
    "uchf": "CHTC",
    "ucny": "CNTC",
    "udkk": "DKTC",
    "ueur": "EUTC",
    "ugbp": "GBTC",
    "uhkd": "HKTC",
    "uidr": "IDTC",
    "uinr": "INTC",
    "ujpy": "JPTC",
    "ukrw": "KRTC",
    "umnt": "MNTC",
    "umyr": "MYTC",
    "unok": "NOTC",
    "uphp": "PHTC",
    "usdr": "SDTC",
    "usek": "SETC",
    "usgd": "SGTC",
    "uthb": "THTC",
    "utwd": "TWTC"
}

// Tableau de correspondance Adresse/Désignation de compte
export const tblCorrespondanceCompte = {

    // Terra
    "terra1sk06e3dyexuq4shw77y3dsv480xv42mq73anxu": "Burn wallet",
    "terra1jgp27m8fykex4e4jtt0l7ze8q528ux2lh4zh0f": "Oracle pool",
    "terra1jv65s3grqf6v6jl3dp4t6c9t9rk99cd8pm7utl": "Community Pool (shared)",  // Distribution Module
    "terra1fl48vsnmsdzcv85q5d2q4z5ajdha8yu3nln0mh": "Bonded Tokens Pool",
    "terra1tygms3xhhs3yv487phx3dw4a95jn7t7l8l07dr": "Unbonding Tokens Pool",

    // CEXs (source : LUNCdash and https://terraclassic.stakebin.io/terra/wallets)
    "terra18vnrzlzm2c4xfsx382pj2xndqtt00rvhu24sqe": "Binance main wallet",
    //"terra13s4gwzxv6dycfctvddfuy6r3zm7d6zklynzzj5": "OKX 1",      Doublon avec 'LUNC DAO'
    // "terra1chq5ps8yya004gsw4xz62pd4psr5hafe7kdt6d": "Kucoin 2",
    // "terra14l46jrdgdhaw4cejukx50ndp0hss95ekt2kfmw": "Kucoin 3",
    // "terra12amk3hgzqn85n0zlsmxp75cdcwt782w23t7acx": "Kucoin 5",
    "terra1nm0rrq86ucezaf8uj35pq9fpwr5r82clp5z7r5": "Kraken users",
    "terra1w8nc8ev0ylg97qnj080np4lnljngdvpd90ev63": "MEXC wallet",
    "terra1rvxcszyfecrt2v3a7md8p30hvu39kj6xf48w9e": "Kucoin wallet",
    "terra1j435gkgg8d0qadjcn09s73rtk5k3ftrx7mc4a8": "ByBit wallet",
    "terra1qf07h97m7s93q7dj450c57h79f3c7a7ddn37r2": "CoinInn wallet",


    // Validateurs
    "terra1uml7n30kyndkmjvrgy6d63kffpn6hvztx79mnf": "Frag",
    "terra1a0lhtrf5dcpdtld9k5praqw0hp5n9plgq7n7mk": "Lunaclassic.com",      // Val, but shutting down
    "terra16e75e62ztl6yzkulfck0p99d4cua9zjcdj0wq3": "Nova (old)",
    "terra16aumxyfeh2vrd2kr9qk2gadmwmg4jm5kw6nryp": "Burn It All!!! validator",
    "terra13avdm9rqxpftv3vrkaqaakakgh30909x8hrruz": "GalacticShift.io validator",
    "terra120ppepaj2lh5vreadx42wnjjznh55vvktwj679": "AllNodes validator",
    "terra1j27nm2gjm0m4lsye8lspa46rax0rw4fge9awrs": "Luna Station 88 validator",
    "terra15ahd0dg9qwkg5tjmkn7fm6sdrpwa47m50selnm": "HCC validator",
    "terra18kdk2kf8uvzs5gghky23hv4q7wdnk0ff2k83wt": "Garuda Universe validator",


    // Autres comptes notoires
    "terra1g9htux72h5nj5c0hpzely3rqwnryzmy22xlxpu": "DFLunc",
    "terra153mwt0upple9klvrryrtckx9vneguw6ja33d3c": "TerraCasino.io",
    "terra1vwchc3pkrxn8kahd0g9wxd8zjr0drnduzkn4z3": "Cremation Coin",
    "terra13s4gwzxv6dycfctvddfuy6r3zm7d6zklynzzj5": "LUNC DAO",
    "terra1l5czlksptahp4lz9snzs6gpszancuftvnjaf8e": "DIAMOND HODL",
    "terra14ju0cvctm9v5d0xxtjj3h9ejkc92qgtzqynfpt": "LUNC Warriors Project",
    "terra1sq6th05hdwwwxvymzytc93lvhjxyx4pkjurhgj": "LunaticsToken",
    "terra1lahvss98xwyhuf7lz8rcgu2rc8zecz3htj6f8y": "Lunasphere",
    "terra13yxmvax7ndvaptgxmqjgqmejka48nrcfm66xaa": "LUNCwhales",
    "terra1nh8sjqy87z9mevgnmyd889s82g4hfj44dy7kp7": "Project LUNCBurn (HCC)",
	"terra13yex6xefup97382jq07se35at3vzrkrt8d7h5k": "GarudaX Token Burn",
	"terra1xusghqxnaxmnflqxtuh6jlumjfvapksw5ctnm3": "Air Force Lunc Burn"
}


// Tableau de messages
export const tblCorrespondanceMessages = {
    "MsgSend": "Send",
    "MsgDelegate": "Delegate",
    "MsgUndelegate": "Undelegate",
    "MsgTransfer": "Transfer",
    "MsgBeginRedelegate": "Begin redelegate",
    "MsgVote": "Vote",
    "MsgWithdrawDelegatorReward": "Withdraw delegator reward",
        "MsgWithdrawDelegationReward" : "Withdraw delegation reward",   // variante de 'MsgWithdrawDelegatorReward' (identifié au bloc #9106141, par exemple)
    "MsgWithdrawValidatorCommission": "Withdraw validator commission",
    "MsgAggregateExchangeRateVote": "Aggregate exchange rate vote",
    "MsgAggregateExchangeRatePrevote": "Aggregate exchange rate prevote",
    "MsgExecuteContract": "Execute contract",
    "MsgSubmitProposal": "Submit proposal",
    "MsgDeposit": "Deposit",
    "MsgFundCommunityPool": "Fund community pool",
    "MsgUpdateClient": "Update client",
    "MsgAcknowledgement": "Acknowledgement",
    "MsgExec": "Exec",
        "MsgExecAuthorized": "Exec authorized",     // variante de 'MsgExec'
    "MsgInstantiateContract": "Instantiate contract",
    "MsgUnjail": "Unjail",
    "MsgCreateValidator": "Create validator",
    "MsgGrantAuthorization": "Grant authorization",
        "MsgGrant": "Grant",        // variante de 'MsgGrantAuthorization'
    "MsgStoreCode": "Store code",
    "MsgMigrateContract": "Migrate contract",
    "MsgSetWithdrawAddress": "Set withdraw address",
    "MsgClearAdmin": "Clear admin",
    "MsgModifyWithdrawAddress": "Modify withdraw address",
    "MsgSwap": "Swap",
    "MsgUpdateAdmin": "Update admin",
    "MsgSwapSend": "Swap send",
    "MsgRevoke": "Revoke",
        "MsgRevokeAuthorization": "Revoke authorization",   // variante de 'MsgRevoke'
    "MsgMultiSend": "Multi send",
    "MsgVoteWeighted": "Vote weighted"
}
