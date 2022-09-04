'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "009c9e65172e010890f7f65fde438006",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "978024bc8a2db3a4b87a948df739c0c3",
".git/logs/refs/heads/flani": "3816e2b0f0b83124bd164209a0b14f6f",
".git/logs/refs/heads/main": "5e3dec49dac9d42b8a2d881d7be03d45",
".git/logs/refs/remotes/origin/main": "d423f4dad6c9cfec00188ea70677a5f9",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/index": "28cb620fccc713fa1f590bc35a0c7ea4",
".git/config": "2ba7cd968b5d2ba0a6b266a4b8edca09",
".git/HEAD": "d91ffe381749d0aff224da373243f380",
".git/refs/heads/flani": "6fa722560707a7ce113069bfe57c9ddd",
".git/refs/heads/main": "6fa722560707a7ce113069bfe57c9ddd",
".git/refs/remotes/origin/main": "6fa722560707a7ce113069bfe57c9ddd",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/COMMIT_EDITMSG": "ea91b96a73e144ebd5b7580e320c0793",
".git/objects/71/2022f563ab1d75c3c2750e7840832dc2236493": "f1a500064f695fa23b90b68b06e0884e",
".git/objects/71/57dc6234034ef4a5c994982d0d2ebcf7641482": "08c3518ee9def9b2ba9ac41a6598d6e0",
".git/objects/d0/20319814d0f299a290d19bbea26215a239b911": "fb6d1b5acff2561dbcb4188a292af5a2",
".git/objects/d0/a8d2ab49c6c722b155e27c80f8a67c8969569c": "f30c97014577eb5030264b5e75378fb4",
".git/objects/d5/536eb91a1b5d87f79c9643c60b48bbe9217925": "e537a324e83873485184de5a7ed26fba",
".git/objects/d5/edeb709ed45a6125cb96c8d9d70088968f5152": "0f38cde421b9c51e76236d5fcbfabfa7",
".git/objects/6c/041e81c2317b8106cfa811397af79e6c401545": "21ad7bea08c16ddb2586c0774205a6a1",
".git/objects/6c/74ce051b95f3eaaa299d6551197f8b2260124f": "c95fe6c3fcc07bb5246474f839487173",
".git/objects/f9/1eef07a6626bb1169edb855ac24727ec34f2d9": "8e3fe1d0851fa00c24a80a5f71b62324",
".git/objects/cc/9ab939321fb957b35165df7edd47ba93b654f0": "6843e28c0b9117abcc7bf8bdb7938ca9",
".git/objects/cc/3f2c41c61b21da9ecb090bce4e6ca9cbde0699": "b41c886af199b056b03cf2f35a3fcde4",
".git/objects/90/c6b23cc8bcb519af38d3c9fe6987b069d5456c": "80a66dbd54eb5f228d3e55e839c9bc0f",
".git/objects/21/a4f141bef71fe4b360f9398d8c918d3b27489e": "32ee88e111c311e0966db5114284f15d",
".git/objects/21/5e049cce386a303bc6fa5ce36e6aa61e900655": "bf4b8e9b08feb57bec5388b710a725cd",
".git/objects/f8/f0a2245f6998926620a429bf32444173bf5bf9": "705fdac54a1e2037d78c82c59469657d",
".git/objects/2d/8e6e175ac0b9c7fabe448f533f70dfbe92197d": "1c8d102212e7081b7f0b801480bc66dd",
".git/objects/2d/630d63d521a4ff17096f65112b30028c052d61": "004508454d3cbf1aeaba38eac3bf1363",
".git/objects/4b/2739f690c5c084a3b8e562eba4919c238e9649": "fc328c8a07ffc036f1657d078d4d600b",
".git/objects/8f/678c0d6c4a84175636856c2ca1c5c11784f827": "e2e1ba34ceae7287cae1053797da0f2e",
".git/objects/8f/8216f65aa1380e073454eb334c40a640232b2d": "3549a07e09de53b4a58002ffebd4060d",
".git/objects/76/4708fa15f88eaf1f8c31c3fcd06666fedb5688": "5dbadb4b290eacb457dc1dcf48b0a004",
".git/objects/8c/bc36a98da8ca803a01ed3b74691c64de5a4aed": "4f8f76b5ad3ea6f2909d8c535d88545d",
".git/objects/8c/99d67288d7f98ae50e8b1e91af888edf54a8d9": "44d1de9b4724e0f0c575d933ab7da073",
".git/objects/c6/c52c74dc0244f5886f4355576f55b7872267ca": "b133caa4a2ecca1ce11cec2574dd23a9",
".git/objects/04/d24e509eed05b81f0d589ebf4edbbaa0759697": "9d27356e71b7fc81c0db8700e8e63d8c",
".git/objects/68/0b9cd0506f91a11bf3821a353b0d7252551743": "7b10089cce4831aa9201157b82b2b439",
".git/objects/68/30088fe6f18d98a4825b615fb18cefe9f00ac5": "dca02b91501a594fd2c60db57c2de459",
".git/objects/07/5a286e09efc4a94ce5c449fcf1245e1ba0652a": "52a3aecdbcb15f0ae3b03d9ac791d359",
".git/objects/07/a372cbf817aee47591a13998816059315513ff": "ab373d28de3e5f55026d25fd9f5f435b",
".git/objects/08/29710a02eb3e0e4f78e5e0ac1c89a2f3849ed1": "269746c6ece113ac0c14817ebdda8901",
".git/objects/08/6cd20c08a56d8ffcbae56642c173c05020d12c": "32f545f48564981b282a51ed7175db97",
".git/objects/08/a018c41d2c8141c4923da7c70dd864802f0559": "bfde4b802ac34a2949ed0af2972ba818",
".git/objects/83/c0296123b0f6d77514eff9b0cd45a6712b71d2": "5c79aec927bf9b2a79b93c7ed8c8eab3",
".git/objects/83/1afbbb2f7e31c53019abac838f55ee204e69fe": "ff2eec03c9ea9193c453b4fcb4c4f132",
".git/objects/83/900e575cb1fa1f317694301801d225b932a099": "f40dbf11e92eb6e05f377ca2e9429adf",
".git/objects/59/c4e1a8bff6cc6a14d366075b2e69ffc1c6a1b7": "5351fe7f3bd169701168e778c9a3708b",
".git/objects/59/62efb2dffef4c259bda261b128fcab4b659c34": "11e1a7683fedc73b6a0da57ee3c6a112",
".git/objects/74/d3308a42c361f3af71d09bcc0b375d09634e80": "57a8a93edd1fba126e17b4432fc5fda8",
".git/objects/74/bc0a434654e0c692c741e2719563c7c63d7dc4": "3b1c740ae2f9577ebbfd9cbc4d5a00cf",
".git/objects/b0/4b218751fd1d60de81d8d2d621ce067880e64f": "0b2f819e0d686ffba15d88110b9d9710",
".git/objects/b2/81ecf08ab4562008ea8b793f75db3d6a8df1d6": "74af3590cdb7d72b7916de9f12bcd3cf",
".git/objects/0e/346d6e25192e78aabad0fa16318fdca3da971b": "dcb15ebf0fa244964a75e80f4e2c6ad3",
".git/objects/0e/c7055392b50eb252fdfdee9db2e19eb08756e7": "063cce2d662a64d56d8cf0e4588eed12",
".git/objects/f5/240b817ddec0094940fac8dc782704e12349a5": "e68eeb6b3908c194b3e1c61b9d0e89be",
".git/objects/f5/fc8d17212dc2efaf555cdd8cd01b0183f4c7f1": "c6ae14ce506ecdb626a7f28df2953f88",
".git/objects/f5/b058bc3f97d9e210a7f6baa90eddef0f057009": "a24821fa6fc6307e4c76a6ebc899055e",
".git/objects/fd/f2d49e3aab8d533112913ed5333266d6ab450c": "108fe93e488c32cbfef65a844dad702a",
".git/objects/7e/f8ac9229a8c6f766601d419ba933d3edb39b5b": "62728ef123c4a9286419d2c13cc419ea",
".git/objects/7e/57d208e70af43f1820d44d12a574888ff9b1fc": "99d016ad3624192a98062215a4c32efc",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/9a/9d58a8d3f94b0438f3cd8c6b817f67cdff5fe5": "fc6ed5064432dd34979b3c58b12ec70a",
".git/objects/4c/37948409da972f8a74f71719fefe549d461ce2": "37e3e342629bb9edaa97dbbe32f550a0",
".git/objects/4c/393649dbc04d3a39193bab2b56f50c7f64ea06": "9d4ae37958b6f682fe1e083c8f43b8c2",
".git/objects/4c/510b9fdcc8519a7ebffa922871d93df6a7384c": "ddc9a4102c63ff0c512fb7ee11bc549f",
".git/objects/5d/333d3fc98f6bfce6c73773717b87c615fe7d3e": "48336892caf8eee439ab4b343d76f76c",
".git/objects/5d/ae26f025aaf680336a70752cc22d45f8cfa9c8": "ac7bf30d24a41eccc7860ea83cf64f54",
".git/objects/5d/b3f08c6ada93eb08452d14f9740e6a285e5bee": "05a438d7ea2b95d96aaba9125b1371dc",
".git/objects/36/205e1e575bf745641bcc537c6ac9637f44047d": "0eddfb413761231fefa9cdf20d4299d6",
".git/objects/2b/c0dcb90aa721aab8983b934aec8942821c20c9": "351e37fb1031acadb3b558975fc6e035",
".git/objects/2b/b503aa4b1cafa944ef8779fc7ba7ce412d54da": "363c53c0224a70b9a154f70dc7f2573c",
".git/objects/d4/e8926abba20e71f784480d796f46a989c2ab7e": "6845aabac49c1a592ec335e215548a18",
".git/objects/38/a12a434b0834299bad5e524a095608057613d7": "f3fcc1b112d186f9cfff50e38275acb0",
".git/objects/38/8241bceaa784eb81e4db46c7ec0858516b953d": "41a2e94183400fbffe6c47eee7ebb1c7",
".git/objects/5e/7c4c53c9aa0f64d1c9e2f8346695e04fefedcf": "99c70fd27a73c59154d0ba4e7e41a259",
".git/objects/77/5c84934b337b304453a81213cab360e41c5ec1": "626308c01771e245e830f2965f8acdb5",
".git/objects/9d/da52fd227f4b5db96002f66e4f32805a021d0b": "2c0599d7021e17993a23c8de284d95af",
".git/objects/31/4e01d2126e9d62b2732e55c2e4a1dc409feee7": "5ff819c7da4a1c41f90ba24215163ead",
".git/objects/a0/e5f9bfce4543861b159f3a274ba6bdb532e0c9": "b19433939ae77815a4bf420d94cb1fa4",
".git/objects/a0/7641dd9bb2fe8e11202d35440d878b585e30c9": "1d85c63792f93c1d94e7e7656ad41161",
".git/objects/ec/ea15ac16150a8a588b89b1900941f75301fd1f": "b2d19efd8f0d420fa8de075944259cdb",
".git/objects/42/c662bc443fe1d5367049c854abbce991cb84da": "31971b967105af912cafccfa4f82fabb",
".git/objects/42/1f51f39b151de2722f3c0323f035dd8d99c2d2": "8a4713bca69d2889451fe46422796ebb",
".git/objects/42/9dd7b5abcda1b916e5cf0c44d5b013d0ea6200": "a8a6c67e31f357e8ec53cccfb2838c38",
".git/objects/42/641261d49baf13dffae2a77c9cb879a3d88b75": "b94db320ab820af9fb615654200359fe",
".git/objects/32/a54de109389fafd66448f06601c4824da8207b": "8fd448bd321f8ac3e97c58ba7b233757",
".git/objects/32/02849913a83deeae164c52bfa6b4fc5c394372": "bb7bbb58510effb017cb6e16645a861e",
".git/objects/ee/2760bbfed1650665b7402969d9d5865692840c": "30f238d14cb06cface24d7bbafe6a087",
".git/objects/95/e8abb5f3c2062b6880193e12c8a48d6762ef7a": "c1bf674dd8d5cc6f22567277df24f418",
".git/objects/95/46006c2bec0b0cafb5e9b0c1a492a0e74226ac": "5a332464398f44f6ea8886732978ce13",
".git/objects/37/8d90ad323356e87b13991d208c7aeaf5c4e053": "482b9b223bfe64c94181fd43a33b1288",
".git/objects/37/f4669ddfbd5c819d3c9125207f4ebb74168491": "dddde061d3f5029753d907a35c679119",
".git/objects/02/2f548a14803c815c555fd0c7b84ac46fb50917": "98f16bb9f00197315a8228d5c1874cfe",
".git/objects/02/cb6bf486d56004d5335c2cd39dcb82c8457491": "e7b0cd7ad79aea82b7dacc44747abb1c",
".git/objects/13/f883fdd4fc268daffbc88fba2898faaaa48fa1": "e3db9494445633ad929357d1374bdb5f",
".git/objects/c3/a3d3d3283e2313751080267db96ab2f65e7d0a": "473c5069b097732ecb8993aa4ae46815",
".git/objects/c3/739529e2fb3438d7e1189f91495a933119be99": "cd0dfb8fb5c86b5e5bd52818e271669e",
".git/objects/93/eee5f8ecf7c3b353465fc3dc350628da2fbfcb": "fd05651fc321030f242b54c2cac908ad",
".git/objects/af/8163882d72d9abddc38d47543a7f7f246b619e": "8a18a54f53aa2350e1e38549bdf769c7",
".git/objects/2e/fc52a6d379fe51a7d56c7837daeadbc539d43c": "b7a50feb6c84f9826b1088283a8d5b3c",
".git/objects/ce/cac7b5590ada914032aed834f805447d71bb59": "81f1162b0c5be98dbbf7f2e06f008c28",
".git/objects/ce/9df4592f2b03349355e95e8732d6aac6097912": "4c1d3ec0bccee55ba6c77e24cab3e97e",
".git/objects/ce/ebdd328f3849cce366d141756e8e6279d5bf97": "d6463e177a02bfe195496e05304f812f",
".git/objects/80/1b470a4bf77486942968a8c056e922f927a6bf": "a0de73ecacc07837c68e4f97748157dd",
".git/objects/fb/5fa3ad773d2ed4d7f0ef4c473efb55830deb13": "12f86ff0286c1a9116791b7b4f7643fc",
".git/objects/fb/94de3d591b294345f86fc8fa6844f437a3e52f": "cd08e77359c76326f9153b644deacfdb",
".git/objects/61/877140ce642d1ea862f9993a6e2ad1db52d440": "9d25515cff50caad83d71560394f082a",
".git/objects/61/862230829f1d58b2db2e8df52f4aa4f8f28923": "6c23249296c6c4afcdbc182fda9a5449",
".git/objects/ad/c2d820dd5f75acc0430e72a0548efe6b058ba5": "ca27fbaf0ced3dc9a94ab2c804e0a959",
".git/objects/ad/5b6a3ae57bab70cf08b133ecb47eca428885fa": "f44b3b9443e6bed2fbdf98ec2048dff3",
".git/objects/ad/e7755a9020cc130a5a172012affea826852479": "23a75b893df41e64977c65163e7bd4b3",
".git/objects/ad/72d118f40388dbf11c86f303a4e2c085fe2df7": "e98ae2fdd45df122a343b1ee45564db2",
".git/objects/7b/0aef963be686037b954ccd72fb7b24630d019a": "bff728823bada5cc9849398807b4b9fa",
".git/objects/03/60073ee69c01d586bb7d186893917c3fbf245e": "8cb2f357d820bdb0a035c909e6c9e022",
".git/objects/72/a1c55601d0408ae3d15f18a97bb2290d4fa117": "151ebd9553eb4d7429028c3a7958dd43",
".git/objects/34/402b98d48aff0ea915c7771c05f59cdd03f6dc": "473ba344b2731b0c91e517be0262e5df",
".git/objects/34/3c02f806380ae81973373d24fcf5da7cbca365": "26d13f1984f2c39f6d71d3d7315c53b6",
".git/objects/34/3ae7be31d6e0d4068d376215078ba85223183f": "2c2a11d89ff2abb492b365178a5c4eac",
".git/objects/34/cf463057ea30daf8740197638c33f179e71e71": "72d2f98af000e424236c877d20026880",
".git/objects/6b/1d68995cc2f8241ea08495190af10b27448ed9": "742f4523339c074f8984079e4ab31f11",
".git/objects/6b/c6c4bddb83078752d81687fc005ae5dc648b94": "885ceb4c9b127add59817938367a934a",
".git/objects/7a/5f072494e5ab5b45605213150197278052b331": "5e851c4a28007beb1aed6b82f72448e1",
".git/objects/89/c7e37cd78117ebe22138401d90ef5c8bdee863": "945ae0ae3594ad870ed5ecec01f7f938",
".git/objects/89/8c454fb6fe50c7f05cdc2db89df05001d7789a": "f59660eb83869db55bb29a29b3834420",
".git/objects/89/ff5f2a5d7ce8c15e11859cf3fae05d21fadb2b": "c241f5a85bb7168e65e5980c90e0eaa8",
".git/objects/89/4665d3c40302bd21c0a72bdd18ba5871645479": "c0205c06a2f8bdce029e21e11031b52b",
".git/objects/89/0c916e5729649fb1aada92198bfc200b7f0b75": "23510826f79f0d69a31a362343a2908d",
".git/objects/55/c098a581bd005fda70645c31e08a666ffc4315": "2b2309b82fceece47f7a5f45c647ad50",
".git/objects/7d/575d514b8d3d956da66f5823fc077eebc7210a": "7f0705d98fd5fc1d06787791502b52be",
".git/objects/7d/b036b597e58175e691ad13c36bda17afd2dc9b": "6f3495eeac325dc3e766ced788b4e671",
".git/objects/ba/8b981faeb8023b607dc1abd45a7ca363bd3926": "12c830477d4120fe1f12d377e2cdc793",
".git/objects/66/1bd1255b8cb0a926f1e8d95f77d65d3e6b2feb": "4ac40eee5af66322ec1c4d9a1498f704",
".git/objects/66/f03ab1ee0a731570485882fdc59cd76c2e2477": "462e6e63ac1c67ab9737d695a50c7fa7",
".git/objects/66/844d415b0895e11a0476822c53df7f89f86358": "e9c309fd1197683bccb204ff0562f7f4",
".git/objects/49/45d8e7892734210f3523faa85c0cbb6dadbc05": "30086becddbfcb5e67c1c41d45378ef0",
".git/objects/ca/c133e2b8795b80db44a435e9600131be718487": "ecc56b529415f3b40c6f70d7c20ded88",
".git/objects/ca/79c964d5a2f9204683a0fe7726c825db6c2f81": "04c0a11881b103c28a040427763fda83",
".git/objects/ca/23599b297a860b134756de4241e83b8ec8776c": "34c5d4e0c316ca3e14db9ba2f50425fb",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/4e/5e639f870b3a931229063430be1d4942c54dfb": "2e99ec5dbfb98437f0b5712d65acdd39",
".git/objects/4e/85aca1710f5b8b5c4a644e2b26f686274a59be": "e863424a0ae662a136b03edccae59952",
".git/objects/1f/95ae25b18ca7fceebc59dd14822c862577823b": "170d6fde40fde684930b315f8ad4c1f6",
".git/objects/e2/31e7560a16160924a38be2c1ca0143d6484064": "0dd53ece5f9bf3a6fa2de62ebd3b9c40",
".git/objects/e2/77fd6f62a93aefd526c97d0f49fb86cae258f8": "c1b744e627db0f430b7da008112aaeec",
".git/objects/81/797bf541c6af5100027bfbf5c109cb2a15da34": "a3e61ae1ba2a8c55f5f48eda572cb7fd",
".git/objects/5c/aada7591914969ceec0b3d3e95839a67512c03": "a6908122c899bafd1ba9af18b05ab814",
".git/objects/5c/30ba55973955bb7624c94a9f1e483a4d7a5275": "ee43ea35b39ce5c44ae834ac5c4cce95",
".git/objects/5c/3ccf93c184fad2a6a2862b971688678cac687f": "4a5bcb4257dd64d9bb3c1d0a103c0194",
".git/objects/8a/d2eff1cde037bee7a0aac961d7b47ea0921060": "b07cf33dc3c1feac7b8f14cd0c35bb69",
".git/objects/8a/1d2df761ceb804234f78108ac24231df342b0f": "bd32ab8d9f222fc7809c54dd78440fe9",
".git/objects/8a/2d1548500637eaa10b138232497e6606e0b3de": "6888acd7175354494ccf2e23fbe53bbf",
".git/objects/b1/f46313024f9c3318911444016d37d02eb9f3b9": "a46b9b5e04d5ffd032d08a9b2062e6cc",
".git/objects/b1/02610f071eb04170ae947e49e5508a45bff623": "a3ecfc82ad31e34439e8a21f7ba9a572",
".git/objects/d2/a6ab6ba76bf5a8f8a1e551087934b2b7b222aa": "2085b456ff44d0db1ab4dc73301315e0",
".git/objects/f3/9aef673ecc50432a48dee621e321d66a676f54": "bbef51f5452dafe040f8db898f51d201",
".git/objects/f3/bee6fd6fe186d80af3369a9c9e7ddc02901223": "7a9ab80fd88ca707579990d5a5a3267e",
".git/objects/f3/d005a90eb9b156eea6ce6296454c38ba2bcb64": "0b0a89b339015eb18b0db4d59d79fd8a",
".git/objects/57/a5b47cbdd18e034dd34621232bcae765ef1025": "32113f6874f756f2587d20ace58306b6",
".git/objects/57/c954cfe5e6aa19f5aa80f058f6610629eaeffa": "08be8d1fe756a5170ecaaa4c2187a4b2",
".git/objects/10/cca47338fbf1e83c77871734d885a528feafc8": "efb644b2d2544ce60c8bb03963c2134a",
".git/objects/10/8d47c4f105769af53e76f49490c77b5db0d91d": "93ec8bc3509a81c21e9c63769f2f24fc",
".git/objects/27/57e6e2cd02654ade247713514e69d18be27482": "30838659661f8fc0f64ec52c9b50f89b",
".git/objects/f4/dac59dfc29ec736d6f6e3914d3013842731b5d": "2bcdb676841520d717df64f2447d21c2",
".git/objects/f4/a0e6c029730463072d85356eda4ad69563f955": "4f2330a6018f0d1b7ca1592aa7e2a5eb",
".git/objects/f2/e8843fc206b6ef4a6844f77e15a0caea61832c": "599cfb02a852a51bd9302167ee13c1a7",
".git/objects/ef/4d2ab8859bd05aa54926d87d1d446c9607dd17": "8df0077a2a858e4e8a70c191fa1debe7",
".git/objects/a3/ead28bf7e72f3ec0a07fe4760995a888baecc9": "cc493d522ff0c3d53ba3128215587bd3",
".git/objects/a3/315c1deed7d910ec999f123eb3e576c68cf2f9": "5745d2a977d4f5c142036cab8f1bf3d0",
".git/objects/a3/b8966630d9d33a8770a4013948a7f2eb5169b4": "cc80eba61b8f8ef52a047971f970f640",
".git/objects/94/845490cfbe3a3ff4f2757ffb022f82c57bb82f": "91e1eb2a8d2729f0db0be2ee50b61200",
".git/objects/94/c47df33d06d0ec14836888f4e3d9ed390a472c": "e4179b572fd3c21fed3a3e3c2cbc4679",
".git/objects/fc/ee0a377ada99583dd256dcee9d05fa4ecdefb8": "7d761dbd5e2c2ac4f32dc11987f2a201",
".git/objects/f0/464f2059e4b6ea9f09481536c1b891f167b4bd": "98b40c08f1c5417c4a6c8b3c37b30aeb",
".git/objects/f0/d8aebae2c19331fca3863f6eb51352e5069469": "a22866013214a199795cbfe1751d174b",
".git/objects/63/fa0021979ef3ad3cf04a85f4e07e556cb24ab6": "b30daa5d21915ee76091b5307e40e66a",
".git/objects/85/dfbac186904998c9121efe141972f7cc7e9ae5": "4e3808cbc86073f5522f75e5407dca0e",
".git/objects/85/a6cfc059377d8eba0ae02314aff8588ea07c54": "4dd99a29e50ab977d8e644c6fa7b4024",
".git/objects/30/de74887f3ddf749c531121c7cf6819a280d74e": "99336bc5eb40add39700a1b2a8ca65dd",
".git/objects/30/6aa0fbefd571f697e954bdfd7acb903f0d78d7": "94a30025e6324afe5bbe25bd6ac25b70",
".git/objects/30/0078d71bd4d6d5d9cc07aaa424332a344eb77c": "023b8824af4bc0c543edc0354b416a1a",
".git/objects/ea/d35e770e7b547536fa4f0c273686aef78a7e12": "bb235a02060e87b333f10efa1e59bfde",
".git/objects/0f/1ac36155eb193703d8d4f3a30d380f15cb6bfc": "d49f2b46a64fc54a317098002617d21b",
".git/objects/0f/86ec995f3cfa2fb6a80c93684417f67db63139": "c47de21ea984f74cc3c0c286468b0850",
".git/objects/24/1a35fef26b7411aa2e5cfb233dde58c1fcbf51": "fab4bd668784a6eb610aef1f6b63a7b3",
".git/objects/24/4acd18776b25bb1032461cdaf2c2aa431a4054": "091777e612d4fd41881ea1b2821f46f2",
".git/objects/b7/10241608ebc0e62e04b2978bff5de7d5d0ad3a": "a3123386d9d6b7000d2e8e80578a377d",
".git/objects/b7/6105bd6bb7071dfef832befbfc9d12a96b2dc4": "b868fad0b2f45ad1bdcb9e6c60d38642",
".git/objects/b7/51f488e3fe53af29657e3ec13541ae282fecc2": "1ad08b14c6beeb3dd08dc6332a9fd5ab",
".git/objects/5a/30e527135d1c27266cb38a6d8ce5cacecff808": "ab96bcd89ae3f09a0330c33a7b7cf4d3",
".git/objects/fe/e79b3f3f007e1366f289dda7ad9ee6a3c56f3c": "bdceefac1ba0500b92f12d15822ebaae",
".git/objects/fe/265702e76590f67b23ab7f889ef895eff5fd01": "258105fc9f60b37127d36efeb8f9699b",
".git/objects/a6/189b17a4cd7ce0fdad9d85aa945be42d248b0b": "c787761dfe938dd3cf7e5da9d922019a",
".git/objects/df/b9e065f4aaa4832adc20b753405f26c5243d10": "43d53d0303f57477b87f9af82f5e0757",
".git/objects/2a/daf153478aa0633e697a63b1e707881d7de2fc": "4ddbec246718a6f6b01d8280619e63d5",
".git/objects/2a/949fae6f5cbe546766ad911a84fa812f591d3c": "5f3a2a12ab9f818f46005749998ebd08",
".git/objects/2a/bd17daf798eafa576dfa190d9a95a6ee80fbde": "fe1d49c8f2eecbeeca8339ddf1ecfa92",
".git/objects/c1/3ec083b8e0f882399c4cc79a9ec4f47264aba8": "6744b732aed49907f94e8b390435014a",
".git/objects/c1/b6a434c7afb7948e7d7fff805704bc15db6c38": "23647f780914160887442125c9aebec2",
".git/objects/5b/1dcd6a1a5a42344b0c024f6ff1756efaef8964": "44146c69a6ccd11ce288d99f700ebcfa",
".git/objects/5b/8e206996141675f96e83cff4be3f01fb93b09b": "7f8f4973d8ed41ff2a2a6fae0dc342cc",
".git/objects/db/dcc2f8446f8fa1dd800f55a5211a8fb53f6f86": "4f9fc78c027d4c0882f7d76a0faa2ea3",
".git/objects/db/f0d17cd01411d5a901aae34aec8e4c3116b27b": "2f380cfd2e15b7e41ab3d10a332ba7cf",
".git/objects/db/4c8d49602cdcc0f23ce6b65c0ec5723f2f572d": "9569607b255d292a933449da0e0a2d37",
".git/objects/db/b44844de1f0c554cded0ce131cf96a6cd3f8e4": "ffb2a155720f574d28053e8a583b4faa",
".git/objects/79/af72dbc4643a93fd26e66dafd73e72983bb925": "ecbb13e06d26bb90f112e521535ddcd7",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/69/4273539bbd5e233c7744f3fbdf92e1cae67211": "1ca212773867cc72027bc9499c94d3e5",
".git/objects/b6/73fbbfa1f7d1ad8c50414be7900e631511456a": "83fc2ff5646e187a502c4ac5d9f01672",
".git/objects/b6/5bb0ee24b77ddeff9b286a4ce0d1b65b59336d": "91254c277a02a20e3cca1dbaee2d09e3",
".git/objects/b6/569183e411a2330ea9568320facb4442e90dcb": "727589e38b3926103a664ba2e3725328",
".git/objects/78/b342472ebb5785026e3d24cc1410cc9a116559": "880df37c8dfe131e9545365f3a157696",
".git/objects/ff/8fa5a3c40c1debda6bf2c07096f00e9a92157d": "29e1fc89aa7ca18196bd65f27b185c22",
".git/objects/cd/6d5dd49d7332a893dfd180a6c871c863a3a7fc": "18095cecb7d26143532bb73cb61779e1",
".git/objects/cd/caad848dda9a21c1acae766116772e2c232c00": "153b040bdb7369a0c1dd79d084827083",
".git/objects/c8/a9d6df28164784af2fd780c636cc26be8da764": "8212d4d797cdfb171809a771116286dc",
".git/objects/2c/c88acba8ce4fa04c89f2a0a4736a2453272859": "9cc9d1cb3b72ea3294d7e11ee3767490",
".git/objects/e4/eb174008e969a8a060a727b61123fb49c4d710": "18f84582ba03e1a392f62b9432213305",
".git/objects/e4/b0de9c1d2e85aa1f77aacac50116315c2b986d": "d0223c81094c500aebd02b8b67143f2e",
".git/objects/e4/df985ef1356fe4016cd874ec94d5c253d3924b": "31ea13a9010bc5586e554a4b0a6d6354",
".git/objects/8b/89dc0214c5dffe54293134ab7f8e2f25de078f": "0fba733c14f0ce1ff4e6f5740cc4bfed",
".git/objects/cf/03c0c7984e9d9fa4e872f93684235e14c6b6e6": "16835e7df77ee76e3c7fc0db6e40d964",
".git/objects/cf/8c7a697a80ff4d1e44592aaf890944bd2817d8": "a28107471ca5491aa978a715c0696d4b",
".git/objects/cf/e5e58f138c40d334505fa819ff6e55b20d39c5": "91126f1007d9d3fd10dd5c829809e349",
".git/objects/ae/cbb40e3367791d08f3efa3d7085cd5aa3b9a83": "1851b774b43db30bb49188965a6bd3ec",
".git/objects/0d/261b8592757f3ac405b527565f0afa9ed8553c": "d545ff181664d317cdba02a492b80529",
".git/objects/c7/b089ea3c6453e45219daadb197a057fb13a801": "02c5e802923eb0de7d15ad8ad1563227",
".git/objects/c7/47b4b3718d66c59d2dcebbae71285b47d1d1a2": "2093165bb92a9e20b396d1f32d75815b",
".git/objects/c7/3d3b893e6372681d2dac8035910e1149cef0e1": "64ce4fc0cd5d5afe934913167dfa7f6a",
".git/objects/7f/e57b2b36e36678729e608165f9554b475284a5": "9f9d3e41b8dc89824b6895b32f5f6b17",
".git/objects/35/c86212e57af0672f4c222a18ad189f19d16e33": "f0c56c784f57033eb54e6da29e822207",
".git/objects/35/ee0e55cbffa76845ffcdfcbe06f1adadb1ec57": "e55f1ef7dde478d5819244c596926629",
".git/objects/bb/4d67a08b8d94d06c2c3c8ccd3443badd7b7917": "b22cac3540f7f2cc2bc2f21a7aec4208",
".git/objects/bb/3b0dc3c54ad0436b46d0a6c44d1b43fc4171ff": "f9f2c16ffda003efd522ccb460ce9d5a",
".git/objects/bb/faf9685a24cbb2438e13020a1c73c0bd46ba1a": "13ae6530f43ecb24d06c6503ea39e2d4",
".git/objects/4d/dead36e808d089f59dac82614aa2500ae5f410": "61c6323a117143d3dfbecbcca0e1eb2e",
".git/objects/4d/6b7f4d54c1a9b58dad1c131d9ffd200148c7d0": "66f4ac31659f41c44fc3d84213d2474b",
".git/objects/4d/4fe3efc77dd5cb55f74cf3a626e81c771dc125": "484cc170816153b61f864a643502c43d",
".git/objects/4d/b58924a46c73182b01aa8e421ed459afad81d8": "56315dbc1523fb60e5af54b8dcb2b637",
".git/objects/4d/cfefe25ac50ab0eb759bf3f3dbf13de52b9e70": "c5c9f21fc398abe02a326a7c2e7272a9",
".git/objects/4d/32e112d067157de7642ded81b889b86ec267d4": "c17e38dd7b9b9352d85508b083e6cad9",
".git/objects/4d/d51d2ae3eff698e021e0a4db336181f4b498fe": "ecd3394a8e9e02c096ed385618a07749",
".git/objects/8d/3be331d36b62399b660fb157cf5c05c91f027d": "7f2ccd75d72411796c033a5d08feb67a",
".git/objects/12/60e31fdd2cd85949b69df1b50b3918d18ac81a": "3ef84d326f4feb10e939878e1d76abaf",
".git/objects/12/f97d6705bf5d619debeba1ecfd8f4a770ad4b1": "448da0f406444c677c9f452ec46cb2e2",
".git/objects/a5/8f9cbc5bacabcaa8d5c482f41510038c2beadf": "96377dc7c761a8c3be24daff524f5fa7",
".git/objects/a5/b6dc53831067199ebf827e68cceb4cf94feaf6": "cb32d490f172bbf7204aed13ccf986a1",
".git/objects/a5/83cb942e1b5ab7c52ba780914bfc1a405e77af": "0b29c6ffb6ab54646f4a44b67cc1c1c9",
".git/objects/43/233feeea1fa62d1a6550a66faa757c22ece85b": "01f34d86f6c24f49e1659d219253b952",
".git/objects/43/89a53482c2545685c8e9a8f1ad0a307cd0ca36": "1b77cf580844dbcb92c56f5e8991849b",
".git/objects/3d/ce4f0e569fb43ff1c831dd1cdfa5926bc597fb": "db5e33a4e300ffa3f956f6a37d1ee39b",
".git/objects/56/664347ce81d6ef46452d85fdfe6c08a6a82715": "e94d2602e69766aa7fd06246cea663ed",
".git/objects/56/41959d65b22e4571f5c51f9a623ea5c00dbb84": "89716a4beb77ad0377f2482493517a51",
".git/objects/b8/5c8decd2d3b6a9dd13c5f0fcb551e2c838485d": "a2f9e0bcbe815abe4839085690be9a2e",
".git/objects/d1/f1fd065a734436793976b9421c2370c14dd15a": "922de60c50d3e462306bb8c50d822202",
".git/objects/d1/ee75cda14621e889cbdf534288b9dd68d81bbe": "3ab10de61ff3c6154aa9c82cdc170205",
".git/objects/d1/0fc86d62df581f5a97d4d38ae7ed1ada5d2824": "f955cefaa8504fc874e09b81e0787df3",
".git/objects/16/34caccd1dfe17a6dc818db8ee6ca3f9ec68195": "37109879a043caacc737d6f2ab7ce256",
".git/objects/4f/4404d23150a432b24c56316bbecb78ebbe0c5d": "088921038d3ea30ec3f499e911112b62",
".git/objects/a7/3c140992454e7b100d225f565a2aa17afe4212": "addde6d2cf191fbdb520ecf8a31a9afe",
".git/objects/98/5a905dafdc032c7692d6553f113e039a5edd04": "840ebe872b131427ae9c1a68f2422de1",
".git/objects/98/7aa13c9d8292cb79a7232d25f218c86fb0ee42": "e382d3bd35a1940623b1b08458831b26",
".git/objects/98/8d06fbbce1d479d6dceafaaee1cc01eacc88cf": "c1544acc73f7c6cc4f6982814be879e1",
".git/objects/ab/dd10799f39f37105b01235999ffb9f28d4b61f": "bbe3e77ea5336275227b2cc582aac8f4",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/39/6f704679ca05f4b37540efbce437aeb959819f": "860129f68548feebcb4b615e23fef554",
".git/objects/39/783834060e368ca3a035e6b03f30b12c0a7cb5": "c811626e5bf150d93b81e3eb282b63f1",
".git/objects/91/56f7c62c379e1edcf6fc3fdd7e0867b6f8257e": "cc39f8d467751e6bac9a65c132c55917",
".git/objects/91/7e220cbfbfa804b295471cf6069ff9d49d4c73": "56ab1ed328065992d7c8615a55aa6e78",
".git/objects/91/5a70f90eed2607166c11b718a200f88b29c2ea": "ec3a18cbc2ca9519ad9009e8f66bd5ae",
".git/objects/96/bf7122807a0bacf2a1bb68c44e6d60cbd1df3e": "92a508642c7e7f46e4882013e1b35624",
".git/objects/96/82d9e0f822840cf16e793f78be0a4d61412754": "2d3a1b80aa3bfe9b9a823d7154582a04",
".git/objects/96/eee1ba1e80e1647605222ff39532df13c03d06": "aa21481ec489b18056b96281cd7ca7cc",
".git/objects/1c/2f397b119cfa23c8eb53a44b39e0fdf9b76fe5": "34c4a0dcc63075b3b39aedc11bbf9aff",
".git/objects/1c/279d96c7b13c76186585bf53ee8e92e3d8edcc": "206dd6d4a7aa2fbf2716a4035bc618dc",
".git/objects/44/9c7c1e8f46573f85215d32c21c99afb11e353b": "6b7c24a2565a9abdda06b770d293257e",
".git/objects/44/51226fa6415ccd3c71770d1e798bc94d52cfbd": "5df98fbd73542341f551fcef5a616590",
".git/objects/25/e64ed4618518e7b542d77d9bee5e2f28bd1d7a": "0449366f27df483ab0d6f12d9d2be1bd",
".git/objects/70/32c0408de8d4a5733f4170d9c5996d9cc56bcb": "27c9e50890169b0a5774160e0073f25e",
".git/objects/86/252a48426583a8b840145f5ebfe79db3396488": "efd1fd9a9c97fb0b81304d65d6d9e677",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/05/73f0901716f4a2fc12418eec7ce84538db37f0": "577b7f0787524a8a0f5eee0165508b5a",
".git/objects/05/10dc5ac1944787f53c9e55bf9f4b754ac64146": "b86807c0216234e4f272b66c029fe4f8",
".git/objects/05/4f100d8c979f01828acf863f9d736aa73ed686": "bd30765cb6ade10c4f47da5642c8b009",
".git/objects/a2/8ff8a843359ae425d5327baf6b5eaaead0fea2": "bd4b05fcc13d14c914186b29dc49b7b4",
".git/objects/a2/137604e26239534a586ec5748e070b65d65d65": "aee97af16f92dccb5b83c245e4f131f0",
".git/objects/a2/d17e7e62db53ff795bf0d0ffb2a3b2fd4bf8de": "746cbb51879392d4a2c0fa61e0387eb0",
".git/objects/a2/ca61b4e380a58b7eb97f8c905d63da9e3ff19e": "79d5e9e26006698524cf8495047c8b14",
".git/objects/65/4106deca924eba74a737b7576ffb780e0b221a": "8048118d43d96951c0238f99665ce051",
".git/objects/4a/7b6164275fb82911cc3db4c2d08be1372e5d2c": "c6b274d93cbae8cd869b871dce89b12c",
".git/objects/4a/55a91fcea010b1dbf6c967eab75f69a5381832": "e5e53905aa53103007a8f63cb6cac2ec",
".git/objects/52/480a63b1f184ea74afb06662aa98fa98864864": "6f8b2cf71be2b4830601f9db57eded45",
".git/objects/2f/43ba6da42b5c0dc68e36b975a58bd6cefb8658": "e087c53cc2e7319e3f84c8ae2c979d24",
".git/objects/d9/a5a5338b811cdec242b1d82dbfb25bf5d0bf41": "352cbf7b3897e5a58d90efbb4f3d5c66",
".git/objects/d9/c5733007e0fbb41d65f3be5e6bef7f54cbe0db": "64bb8463ebbad33e9451d3330a811445",
".git/objects/22/079d3177334a4cc4380cd5ba45ca8283598d28": "38467e108bb7663c64933f6a033366e1",
".git/objects/de/09ffe9f345b4865e5961096a7337bc32fed4d5": "8998b2fb2e85e1d1b1be201346cb585b",
".git/objects/1b/bcbf96ab089e44f1d0a232b4fd6e03c1531b9d": "e30fe02275eb6090508f5b125e880d03",
".git/objects/0a/a4242969184f5a43972c5bed2f4012a0bc7ae8": "d45273f68ad22581ce6762d25002e6a6",
".git/objects/84/06ab00d51ef4c5bc3498605dd2a4f2309d63dd": "9c5ad27aeed3b0bfa0d87bff1ae0800a",
".git/objects/84/3b034fb574bdddd9b1e2ecf8e1244ec4a7d946": "bf78166168ed947f92267cf7c1df2207",
".git/objects/0c/c081141e357ad713e7a57c727aeccd4c7c1274": "0944c857a26fe54d1246b739f2591d03",
".git/objects/0c/a2d0e4f68b6deabe806bb2b4dc093adb0b4c89": "74e4983704b862621acc5f379a84192b",
".git/objects/1e/5402408059e30c3bded765055211c2a713ec53": "c9a4fec8b95a0bfb0c9e40de8c20e90c",
".git/objects/0b/708e7dfd8c728ac59461dc7b74d637f703000b": "902023c682cae6d14b07a21b775188a2",
".git/objects/c4/e1f6704b1e982d393593780740f8b257366f93": "1a3b54cc7170effbb7cf78b1b1b18b92",
".git/objects/3a/42cb891ed73a68bce45823278c4976d87ee9c0": "193ac2685782fae079d4005be4e606db",
".git/objects/3a/b522a601940808672c129d0d00a47ae391482e": "3322b86d880a5dc79f4d11448fbfadbd",
".git/objects/3a/b9816b98ff73d6f2dd02f478fe445b921beab8": "7fc4db167717c14611b358a4f60e8669",
".git/objects/1a/ad9ffd5ed7698ea021dbd380d1768bbcf07be6": "a75eff533bb99bf46e4a41e2371f0d86",
".git/objects/1a/e48c5fb1408ac6d85c1643121f81d341efdb01": "4c67f8a76a293b0ca24763c3aafdc589",
".git/objects/c0/54f8267e5b0ef203a60dfd312e8eb04dcb6c97": "0b463f7860f0d6bce8580a1865f86d2e",
".git/objects/11/e02d4fef933e3fa5a04f58834cee92dfd3160a": "57b87e5807ed891d5901c12fe4929944",
".git/objects/11/20a1b38350f59e22d97a9a5f6704361fc2188d": "77876628aa2941e8bc6fa7fcfc8412c0",
".git/objects/e9/8e15c63a83426bfaf9427e6e028dff17ab01b7": "64c97870c957dd0a2627091f60c4a0b2",
".git/objects/e9/24c91463fd571b1e52b4366fcb87d9e590686e": "27677a98d4c5614049d210412cf0305c",
".git/objects/e9/536c530ad28836354f01645915dbfc495c44aa": "27689d8bfdd11e6ffcda18ea29624b8a",
".git/objects/58/52a8e0ea4d1bb18ac3a7ae0794ae1e25513d75": "541dc67fdb88e3790adf147e66cd1f65",
".git/objects/58/f18047213a39d213130c5e89be42a2f7ed1b4d": "288bcd5a213a337adeed241628cdafb6",
".git/objects/58/a0e3e5ff3fbfa6ccfdf923e7cc761a992cae66": "a0d556ecca380dbb568d0e4953ecb2d8",
".git/objects/6a/8806ec7ca12c7f1e7e078d519743b795196353": "aff4fdb9cf6ee8f640b647ab64129172",
".git/objects/6a/85d90d25950151b06aedeb3a5f279effbfeb2f": "1a37d9341914ee45f91050bc9b5ff015",
".git/objects/6a/9bcf6de245f60287602ac9a539c572af9c5c4c": "ff27a3b93a0cd08d545cf4e1b918f76b",
".git/objects/3e/57a89b23c92049ecbc199fd78b9172f8ad98da": "3d2e7f762fb596d9cf5021403be5ac26",
".git/objects/41/947be9dca73a04ec2bed31665d6e9493343ac4": "9bcde354b220b2afba6ed8e4b394d1ed",
".git/objects/41/c7cc3fb44cd7fb5cf8bb9fb7a6a4c9cffb9317": "36a6c095cdda10cb42e560ee6fff10a4",
".git/objects/41/5105c16ecebb3da36767c27d640a53af7340f2": "8516bbf6cc46d3580d8832f0b0c76b03",
".git/objects/3f/5ddf30799fa0c00ad90b80e2a7249878ffd096": "29e63b5ebfe1923a5ef8b4e5e2a147b0",
".git/objects/3f/13e964e57174cdc3353b8fdcf544e3ad89d04e": "6ebea2caa885bd8aa723e88dc0f557dc",
".git/objects/f1/2e6a1397909468c98163d81dc04fd42d588dc7": "c02767d55e046240c0d7dfc92b41a1b6",
".git/objects/f1/7439342383c8f328f81276b676dcde45d5a0b3": "0431d4afe8305849fc13afa328a8d723",
".git/objects/f1/bdf0715bfd2eec14859ea94ec895a0b1c4ba98": "6b7fd4f7b8f3c06d0d5a0c490347cde5",
".git/objects/6e/daf99bf86241ce19fe498af538f946f68a08e8": "e8aa10b539f05f705b64cbee6a3ea774",
".git/objects/1d/4e14e2a9c4cf15ac1d72ebe5750fc5914e463c": "b269ef3cde5d257fd238987fd0db236e",
".git/objects/3b/4c29b45347e4cdfa8fab12d624cb480ba62046": "a8e61fe9f452b0edf255fc8345672bdb",
".git/objects/3b/16c37dcfe05987554a6e7ede3b11145354aafd": "972600945d401f1e3a9736c5e0333e81",
".git/objects/7c/6aad420d1ffe3dbd0142ab4d004a2f4d0424c8": "f0fae62bec8fdaf940a8bea32c1a9a8d",
".git/objects/7c/e1fb2865a1bd09ac4d141ac4a6109c29803488": "b0cd8e1bfb3b735ca4adbe92501c688c",
".git/objects/d3/aee347f4f68d853fd42565ff7915aba4bbcf27": "eadd6876697fbfca7766a7e114edb7a7",
".git/objects/d3/a2c48b0743f1ae8508afb15c24bcf4a3b20018": "99f76cf75d5ab24d5621313e15235d2e",
".git/objects/9c/c3818a4997f81634ded465ed3d43184cf9068d": "330c33bc1a32cc3a780fd983e7079ecf",
".git/objects/9c/e2ca1fd68f288d7be428f7b2e798ba32508691": "e896e0e597d0a6e2bd30ef7386d925f3",
".git/objects/bd/4b835a6084842616f74fb651cd3753032b27c8": "255a9c4a2b978f49debaba6947da06ad",
".git/objects/bd/518e56dd9c5192d2941e6205c35176e36ad927": "82a8b846b5455e15b49aa9d888629273",
".git/objects/48/8a788f13f16b41e0f44e718ddc6040cacd5882": "3979c15298760f9553d19fda3cdde146",
".git/objects/15/f2b0067baad23023399a7b19e152b423150add": "0124810926e88d22fc91005a4fb7ed00",
".git/objects/15/3f709351d6016c14ee1bcc5874034caa7dbc62": "0e809bf23676f9bc757e3149dc0cb20e",
".git/objects/e3/143c11b79690018010b8d2f2508defb34338a8": "d97c4517e8e3dc1a0c96b5ba9aafc228",
".git/objects/d8/127a5ce4dd7fea28bdf7ade8e142607e293c45": "aec93aef711c9e3d3c92a830affb927c",
".git/objects/64/d2f50ade3afc8deb29aec775fd2af22b78e662": "4bc0104e39c7ba416a9f9aaa309a3ac5",
".git/objects/c9/7eec8a9300e973d08086fe2e80846019e192f6": "de2bb186783a8e5f7d1c931ef1f4bc40",
"manifest.json": "846f95787ffa97710c92daf923b11c41",
"flutter.js": "0816e65a103ba8ba51b174eeeeb2cb67",
"main.dart.js": "bd93e6870e9f01c1ebb464641269d626",
"splash/splash.js": "c6a271349a0cd249bdb6d3c4d12f5dcf",
"splash/style.css": "131b3de1a90238a60782e87624ff0460",
"index.html": "a081bf25cad4c9e6b1187b651f268d89",
"/": "a081bf25cad4c9e6b1187b651f268d89",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/AssetManifest.json": "902c9ca52fd2ed3c4208b15a83b17699",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/assets/images/flutter.png": "7a48d7c8f2d7f65d904aaa538e7252ca",
"assets/assets/images/cle.png": "5fc82a6f0271f3c643cb425d901c70dd",
"assets/assets/images/nima.png": "caeb2c7056b899292d6f3e79355af45e",
"assets/assets/images/asecna.png": "c40966b36dae925961242a475dd2faed",
"assets/assets/images/facebook.png": "1c131dbd08b8636ada8dbd9758b57ddb",
"assets/assets/images/linkedIn.png": "539e826d2e9efd907a4a487e3fd4c27a",
"assets/assets/images/sofretim.png": "4476194fa7be6047d1bed580897ba8d7",
"assets/assets/images/github.png": "b17444f181dfac9004b1138776afc162",
"assets/assets/images/djate.PNG": "78aa3b85b6a694e043afc28da83383ec",
"assets/assets/images/nima.PNG": "5ad99368d3270ef7b3c7ee05c4b65d2f",
"assets/assets/images/flutter_circle.png": "59abe6cc666a648c33f9488e53663858",
"assets/assets/images/diplome.png": "a274788148d73a7a599bcfbb422008dc",
"assets/assets/images/dem%2520dik.png": "d1632652d4fbae7d998604ee8eecf48f",
"assets/assets/images/icon.png": "ad4974b4cedcacb0aa07f465d933e9a0",
"assets/assets/images/brain.png": "d13f4ca8cd9e443354ad19f0e2cb2e9d",
"assets/assets/images/mamadou.png": "472550c606b6e5e0eb8fd50be760d65f",
"assets/assets/images/logo.png": "3bfbb92357254ae0bd4ffa8a4dcd392a",
"assets/NOTICES": "38c451388c522d934638557661d2f02a",
"icons/icon-192.png": "2cac391d332234176840b3d588dbc627",
"icons/icon-512.png": "c82d0eedacf319b64fe5d652866a1dc4",
"style.css": "34d206e797d8b38d6d444d057eb9c7b4",
"README.md": "e763eef9eb59a86b6d19a86296eddffb",
"favicon.ico": "f55fc14a5aacfc43e10d62eae5df16a6"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
