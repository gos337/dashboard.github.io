'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "648bd13cf3d2364d6cb59b3c6140ee40",
"index.html": "bf2816a4ee2a0125b23b02a5a14ade0b",
"/": "bf2816a4ee2a0125b23b02a5a14ade0b",
"main.dart.js": "f0c9e3eab2896b7398dd1b7972e20b50",
"flutter.js": "7d69e653079438abfbb24b82a655b0a4",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "5f2120b19f4a0543620c891c3efa0fb9",
".git/ORIG_HEAD": "17ccf8695f13c98b144a3b75f5051325",
".git/config": "3304c5b7d746c3cbee13f386d6ab9b47",
".git/objects/59/300372d9072138937724be96baba209166e984": "b26ad284dff30c3decefe403223ecf1f",
".git/objects/92/eb2863dabda5238af2435effe5c4875d992b03": "7eaff4823f65bff9a0b151af370cf057",
".git/objects/66/46ce4f3e58c2098afb0a4fecdf2014f066af0b": "fef56db903ba4c0faff4c2ffb4bb9e10",
".git/objects/50/2a713570e57533690f3d5a490f4e1f833a7b75": "797142c1da9d0e4d96046e9e9d962143",
".git/objects/03/d8f2e02f7050b667a9b5102c1d3d5313062468": "cfcd8cba5da351a4169d5c280b64abe9",
".git/objects/04/e5efc15dc0c60ea2ffcc37c5bf25e96689f44d": "978222f47488835b92838c74cb5c684c",
".git/objects/32/b4a910592a36dace3760591f14ea33199b99b6": "b754745cd5b39e98041840c246f0e8e9",
".git/objects/3c/26d5f0c6856cacc0dd733ed4b9f218d537ee8b": "e73d9f8fbfadde36817851046b343c5a",
".git/objects/51/e926d341e7a588dc7336b352fa09f572176421": "1db5fe6e3ea2e8bfb66e907979d9d22d",
".git/objects/51/52d22b2e45b5e5748e1dc8a778da30e33f16f7": "0d6215d044a24d7f534f50e6cfc740c1",
".git/objects/3d/aed05eb18c17ae10fd14079689c3ec6e8916e1": "93dcc0ac916ac20c7b9fb73ff7a92735",
".git/objects/3d/245a78e40b6013ddbeb7c3cab3055b51ddd9ea": "f273b736ba4ca930c96d21cf696dd265",
".git/objects/3d/e683ebfb27d7967c686361521ba0ab67afd145": "67321973775652dbd8b9e4bdb9997453",
".git/objects/58/388a5fd5917023bdd4f04a127bb082ab10c55c": "c56b53b9c2ad51b2c5b424ec0fcc03f7",
".git/objects/0e/d6306895dc2a9cc0a9015f1e7233e5aca88269": "4d59d74f85e8373535625879e6a793e5",
".git/objects/0e/1aab70c2bcda47dfd2c9828375fedcddcf2fd2": "008716e19c743b0c3a22ccf4c034b0ea",
".git/objects/60/20d306edddb2826e6a6f9aca14c179947b2c93": "f5171dd42e35313a68321e2762f766d7",
".git/objects/33/2af4242f197fa8aff1cd2838e9a29e00baa7eb": "0b2b97c13d52eb7fa0d6d1ddeba8c5c9",
".git/objects/05/7506983f0a8b0438fc5f24382db64497bf6eae": "90601edfa45851b2856f614e122579a0",
".git/objects/02/6a9dc22737497a06c7cb8d2333fd87f9e8e9d7": "ea6b383a045574a2d6c29d09591eccb5",
".git/objects/a4/17ce08f9c2cc39a58e5aea3516ef4d6ead2671": "089ab1e360196fef07aedfb8dc355f62",
".git/objects/a4/cfa4414fa664f3101e31579f0be6ccc7bdd14f": "1257a5964ab76a512869e4a44a9bea12",
".git/objects/b5/0d82ce6dd92bc4876070f243ed2341d236a053": "9e368a3efd9a0ec8017cfa41a3d26571",
".git/objects/bb/3085876799532613a08c7ebe43f24f0cc46864": "1b6aa21800d948d5513c15e54d131215",
".git/objects/d7/2c11112c7cb4e2ce754bc41470f9b829a2d00a": "d7280a766a5d6033f187d874a92b5ad6",
".git/objects/d0/f86575508b61f16b9f7eee438d003ba2f834a4": "86a7c55df1f40eec9c829797542177a1",
".git/objects/b3/3819935179f94aac67ab19a9071348a81b620c": "0f91ce155cf7be20d5288d86cfa9a668",
".git/objects/df/b8c52fe23106d773fc12ee0cf9a39126d2488e": "b9b4870e59c0c7b5b495e15a15821993",
".git/objects/df/7d2dcb89ab89da87467c0e1059b38c8d8f9296": "a44162ff357b024e4638ab18a9bb01c7",
".git/objects/a5/4a0e004dab9feb365f0d08bdc1d87a2e6a4112": "484a6b548627688c9298d3b95cc34781",
".git/objects/bd/b8b75593b1b9f0cbad60a4fa4d952d218d4b59": "b98fa8066af0f7825882221dd389c2a6",
".git/objects/bd/941bd9ec5200d85d71c3162b26c89b773a7871": "942e34f4bf90e59c3a093500e7400324",
".git/objects/bd/eb8ab68a58932e15732d87f1c0c1a2d844db9a": "2b99685a8e920edcb229c2cc5623919d",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/ab/55e6d7c5f1f9b8f9feef4f64e9afc5b7c4aa44": "669b5094c736ae8f71492667bfa2b291",
".git/objects/ab/1f9d98b83f6a8132f96efd4de1f22e6506bc32": "ea0bf32cd4f68263972c123453c0f0bd",
".git/objects/f3/8f5ffd68c2d9f62f4f54a6a9a23f9d30c553bc": "48a0f3a1e6907ec00e827b029e10a64f",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/c7/2348b05cef593cf3b3a33c1d06fa2dd1ebafa7": "6faf5291347bce1d64804900924c8572",
".git/objects/ca/7ae1daf1b68e994529d78ee565ba9d4a872360": "02d660375ec4ab9da945cbf739c7d852",
".git/objects/c8/02d23da5c42de0ee4984c5268066302d34bc49": "ef3f04e82ae5136f2d1e8b52759a5a29",
".git/objects/fb/e58caeec5b9f8d78a8bde621bc04549b66d7e0": "af1c3759647baa8f5e6a41eb7b5f2722",
".git/objects/ed/191c0d7df83368e389092aee53bf5f0cfda1ff": "2181ead33cf9bfe7635d65d26b9d3645",
".git/objects/ec/a49dbfe3b45d7a378c443fbe3949e889ddd7b7": "455a6b44faafd645254f5d20f3195d4b",
".git/objects/4e/58776425e28f43bd272211d1ad007ea50856fd": "f078edc7b941c0e35270fed80c5bd4e9",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/18/b28b2124a2241a01041d2df47ef0bcaa2a81bc": "1c40afc8862ab1f34c16bbe647925d32",
".git/objects/4b/4f60f8ac2be980865358466d3d913155e92c08": "3de2b92da3f30b7df93353a6e98eede8",
".git/objects/11/b6b452433c83809d3048ade138846c3687613d": "bdd579dd3406b6a0d346956a659cf294",
".git/objects/11/a3e6d98f0b2734f4e3cf17edd69833e8b5ad4e": "394c51067be2c142b63c653122265a92",
".git/objects/29/1e34e1095530f2e9c22d934685bcd282237cc1": "a9a4618a3b31f430150a5a82ec1537d4",
".git/objects/7c/35a904b7e2811e7b95159e6702b4cb5bacb9b8": "f95601d9b6d952c9e52dbdbd2aa0ca11",
".git/objects/42/c400f329114b5bff086f6e46f1e311ce19fd27": "4c174d52bd6f6d26dcbb2dd45d019fe3",
".git/objects/42/4bcb4940ec12184d5877d924fd514ca7855555": "9b648e3f38051d51e6a112a4804bdbc3",
".git/objects/45/3fc945e4bd4e3a59b7a516a81e3925ebb3838a": "c7c3ab95c8b1d986240a0248c93cf891",
".git/objects/1a/9a5efdc50f190da3fd03d905d1b5420d1e5428": "b59d7e257176fe250cd16a34ac306f5a",
".git/objects/1a/f02b0fb2ba7d8c906ca2c1222bd91ca3af0cbb": "146f2762ffa6a87dad20d09889d04a24",
".git/objects/7b/670b77e646fe15fa98abb14b9e61f37cb6d564": "05596219ca303d0326cfb316074baf96",
".git/objects/8f/2f47f39bada72b2287b1371f0bc92e61b03e19": "97fe94aaf1aa58b8bb21eb2354db99ae",
".git/objects/8a/54e367ad3fa7e35a4920d5262d56d62d7e5796": "4fa776d44fd0c0cd0788a4011609e335",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8a/910f1ac6fc6c8f81533cdeea27d9b154901dc2": "05a54d57bfaab591ff612fb959cc7479",
".git/objects/7e/16a66edf8e54581218888841c59808a7044d11": "d8558172bc582458ec2645ec7f411bca",
".git/objects/19/f22e9e08b41d76c43702f07909023b0f07d8b6": "7236811322688ff4344f082651dde158",
".git/objects/4d/28b8199f7664df1e4e88a906b3d875def85849": "77dae681dc20c695c158dca6fb214572",
".git/objects/86/81bc34b636382afc23f83aac47026ca6be2b10": "a2cfc1a775fc57540b316f0ea1094aaf",
".git/objects/43/4788b53adb3639c315e84bc0674d3484abb538": "17bf9a9439c3a0d401ded77d12cadc5c",
".git/objects/43/173756251852521e1c29c78f9e8e38a6dab792": "48d65e6590792b42fd5c4935b83ad16b",
".git/objects/43/e946e398d96aee466fa0aabb625f0889c3a4bd": "ac34520dee747f675e6e0a15c0bbd2be",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/38/8f3ca4ee6e949cd4e7aa25cd0a5995c2a90f70": "7474dc6d5f236579347e2cde087627bc",
".git/objects/00/3a3ce5a44ebd93f01db12946e0f6c9fcd13076": "e184b0cabe0a8d75b99249cf3e5482f3",
".git/objects/00/f01412524d26ac9844d85dbcdc3be96e57c188": "6a29a5c389c076662b13edfa61a914af",
".git/objects/09/f85aec8e9f48c833046a49fa6e583814ff257c": "889fe0b085e257036b2de1dbf7e8d9b6",
".git/objects/5d/b402c410f22973a42d0f7fe2424017e8b0f83b": "374c2de93fc3ec23134ea927c0308fe6",
".git/objects/62/86e440f7873a11ab42b9b3bf44432c4b715eee": "59e67781320a8830d81dca206335fad0",
".git/objects/62/9b293d438051e3c01fdba97f5d6c8d1f605fdf": "9874fec0bed82e6102789af3a85b3227",
".git/objects/3a/8fb7cb803c663aa8989b0b5e6c9e0ba2a44d46": "cdb50aafdd53319bb06820ba47a78861",
".git/objects/98/a66712ddd05b58f0faa83c4bc00c67e3219d26": "09c359aa6809a306b362b96f332416bb",
".git/objects/53/7807567919e88db2866b7825339c57e94c24d8": "970aec5149a3dbe9370a9dc982cdd022",
".git/objects/37/955eee5b895495812348e691e484524f65d298": "963783968079072e9e6800e6e2c38124",
".git/objects/08/bf4cfc2164a0bff74a4bf844128d3b843bbf87": "8a381c2400a8d3d6a20fb6bd660b5405",
".git/objects/6d/ffa2082d5a35c2a1d9fbc8b30ba03d4d24e792": "311a22ef4752203596276687e7205f14",
".git/objects/01/fd8fdba20d046d93c26f32aa528227edbd6bd2": "9a4788dbdce9e53fa8cc19d2d9d83326",
".git/objects/6c/525be3c22954341f014ae43d22686776eaeea8": "a85575f7d4fa226c3223e3121dffe52b",
".git/objects/39/0d080c923df14d04f223ba026a1424f8205697": "2fecd98345f3842f83d3c6778f3ec7e6",
".git/objects/63/7d326ff71c1344cb86bfb7bb9b7a9a85177b53": "96116acdb9567fc571b3da77636ce380",
".git/objects/0a/2ad3a8946718e5da80b8b36f3a970f9203bb41": "493becadfb3c0f3d60727bde4e9f1614",
".git/objects/ba/8cb00dd5231f1a55de0205c16445926a696526": "be8592f9341c9b01b70890c8614c6cf7",
".git/objects/ba/6f653011eb87ab86e317e532f61ad14f65a38b": "036ba096b7c98188b7c88a621b52e525",
".git/objects/a0/d849e748cba07a672505cc6184f178587e03bd": "8212e95b50529b0962c04bbaa187a28c",
".git/objects/a7/c56896bab7cdc6691ce0c5a16ad0ad13c31471": "de2c5eb7f13608b81cd9262b12481512",
".git/objects/a7/71365bde7fb64480971187027f3f0133023280": "742ffd87c3c7a51b4d66bc46c65d4d86",
".git/objects/b1/f4eee153f3f8baebe39dfe8830f542e2a62591": "d58fd5630f32eadb135b21587790481a",
".git/objects/b1/e7d1c2c8c5adab667587f0912449c954f85a7e": "71a4a0697aff9e21b5cc8ba0b421a46c",
".git/objects/b6/56fd532b5c4fc2c0271615ce1b57573101f35f": "e66d5581c516982d0be8390bc902a53c",
".git/objects/d2/b673bf83f0c4afa5f05b4f049f5cb147e33ba7": "b4f128b1eb55786890fa1e5fc9701ff8",
".git/objects/d2/b2512fce55b843f7c6df30679968b76a0d8338": "c5f83029d4b7e8b004cd036bcb73d52e",
".git/objects/d2/c7cf09b3d2a7235b8dbac15c4175489653a110": "a0bed9a8cca5065305004d12b4adbd8a",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/2c8292be09d127546cffff5063382afa0fa54a": "528f62c7e388cf4828957c189a0e131c",
".git/objects/de/4a98beaa9cd39be4ee6f90b29851e56e4b109f": "3e6da27b397ddfc25fdea2bbdcff3438",
".git/objects/b0/80e106108f9da5031b6f5733920069c645b310": "5abeaea2a63654ec56fb0fcb250f4db5",
".git/objects/a6/6ea6e682e83c6272f1ddd7340b2d340eb97bf2": "3472c5b332c68e9ecb586d8df2e251d2",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/4d58b4e5171155d809adc62bfdf3ba8f12a24e": "d2957c2f99673a617b884650bddd9f38",
".git/objects/b9/557ab5c6dbbbff309caa1186683b0d591f06b6": "343285a84654837d16a3eef4f1bc6746",
".git/objects/ef/12aa58390f1ce42bc1feee570d8910480a2c37": "72018e27a119af151221dff425ebd1e6",
".git/objects/e1/ba4c2c1cd7166168fd8f7528f1ff326d2f383a": "7bec85bf7eef66fcef778c77fcb71c13",
".git/objects/cd/ce9dfc0516f459519d355c99e15b0a1de4471a": "065d6464d3119ba6b51d4c7876ead390",
".git/objects/cc/f5760e36369e55a823bc0104c965505d42d629": "609c60f127e2449c5e029b3529847e90",
".git/objects/e6/b745f90f2a4d1ee873fc396496c110db8ff0f3": "2933b2b2ca80c66b96cf80cd73d4cd16",
".git/objects/fa/dc6f88794e45e821e23f14e23e4aa126a15b44": "cd77cf4e28399592daa6e200280091cc",
".git/objects/ff/6be79c467ef1536593364b631db5bb756fe16b": "71b1ec9bdfde0f3cb1b47a9f149888fa",
".git/objects/e9/94883775d4bef29f153b42ef34b69722d28654": "eec4fc9fab6f35d1030b4dc18f2713d3",
".git/objects/e7/e36abc474796c8b6c383380ddd9f87655682ec": "912edc8b67d1189740b5749ac48d469e",
".git/objects/cb/62bf16ca336fb4999e9aa3c54c71dc1e1c95bb": "7360b1a07d295e8559d3bc6e4d5f8980",
".git/objects/2c/20bb03660e2bd2a77e61796579de6cc016a54d": "a6fbc8dc04209881891a4bd373f4ddcb",
".git/objects/79/c69a76eee4b55422e258a6675cc019d250874e": "aa215798474f7546f1a5f2a5c94420fc",
".git/objects/79/fed43d07266cb8b25529549e7af2104127961d": "ea9dc90aa809ff97eb55aac0f0d006e2",
".git/objects/77/e792d7d5fe6eb5d233a5a4deb2f99ae7618eff": "9884a3566e5446edf5742f9f9753ea84",
".git/objects/48/33fcf9ba677d3df448c90e63368e50f8bfc8d6": "a5b926fccf641f8e2a09e52478c0d37a",
".git/objects/24/b6ae72e3120d3d3490d55df2d8a102bca4dffc": "0b866abfa6857655fc19791f2da4196f",
".git/objects/24/8223057c3cf3fee8680ab37af76405a0b60a50": "e54cde5a5f50b21f2a3b06f6ebd8d9ea",
".git/objects/4f/d0e51f345ee398d4c56c9a2a36514cfdc54f3e": "d8e976b7b97437231f01681fc40815a3",
".git/objects/15/37fefb7fba440ede8c6eced8bf563cb8e4b073": "15a30378b36cd1c4902aef25ed982aae",
".git/objects/71/59bfd64339a7e3cbd0c1daac93209650193d49": "d942106e95470ccf2531a020526bf6f7",
".git/objects/76/a30ee3be7ae03a4f14c99d81ec96bdcec0b344": "f9c95ef1b78e26e200f4b24d1398c3e5",
".git/objects/76/019dcedcf269aa562408b2b8721757da19024e": "ebf0c9e5068da3c8be72c84ebda858a2",
".git/objects/1c/befb56a6d895e562ec91c963fa950da997462b": "5f11a60e309311163fab4c93af3811d6",
".git/objects/40/8d1161fb142fb4a7c3af3631d3e3f89a5a19ae": "b948ed0fb282aabbbe890c8052c5b239",
".git/objects/40/c8b69c8291f1186081d1f115938589556757ad": "1eb7e15763b9b00c3edbbd0cc40a5e00",
".git/objects/2b/b3d994b0c1f475fd74410161e398ef04ab5327": "2fce4f40f1925cfc73febd775db0f024",
".git/objects/2b/06cebb3d526237916ea2c032bd4a58f6cff1b7": "17fa80a4e5ecea2c49e034393e686ee2",
".git/objects/14/488990f4d11ae79d8d981f9d09c22f2213d146": "9b69b94b69dd6bc2f59b4df279332005",
".git/objects/8e/4d643397a6f9f055cdf8aab7d05bacf97a50f7": "8d5699486836eeb8dfef8ad4c49454fe",
".git/objects/8e/8eff664d9fa4c265acd75fbd84063873b729e2": "b04c8b943bc1424a83ca65d6235d2293",
".git/objects/8e/5e30a28b4435359945cf08b261c86d0de8da53": "6906b6f1c1183f6388ddf8a760f85a58",
".git/objects/22/ff1b285d2d5a8ce9b35eab48c028e930acf29f": "2e6fb2bd971a4be22f636f6909580a0e",
".git/objects/22/8679e93dbb5228503c7b1d5091b9cce501dbcc": "682b73b7c11697f4246c5376cf4cba3d",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/logs/HEAD": "0f1dc3b51052397e47ecec733b340f44",
".git/logs/refs/heads/main": "0f1dc3b51052397e47ecec733b340f44",
".git/logs/refs/remotes/origin/main": "1f803e07c4df63cd52b90cc9c998809f",
".git/refs/heads/main": "cc6abd802523dbcf92990088ab3d36f0",
".git/refs/remotes/origin/main": "cc6abd802523dbcf92990088ab3d36f0",
".git/index": "14a43741141513c049deafc7f638e643",
".git/COMMIT_EDITMSG": "75b6d9206bfe2c41d4ec2e9928a41d4a",
".git/FETCH_HEAD": "6bac9be5473f74bd2ffaa2ab07cd43c3",
".git/sourcetreeconfig": "f6cfc58a9a7c2d474b79c8e35889b7b2",
"assets/AssetManifest.json": "2d47f9fadac3a24308eec50a8df3db89",
"assets/NOTICES": "25ff7b56bc59672c6cabca6a1190e145",
"assets/FontManifest.json": "11993d4293f5dfba1ff300d6e85a3e2a",
"assets/AssetManifest.bin.json": "460712316748453940e50362caf8c1ca",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"assets/AssetManifest.bin": "1a1faca355ebe3292704f9531d95b7c2",
"assets/resource/snow.png": "002d36888b4e774ca8aeabd8c2b906cf",
"assets/resource/ServerI_Menual_01.png": "c8b4bddd87de8ecf11d06d36922da86f",
"assets/resource/snow2.jpg": "854125c6be2314753aaaf278ac686863",
"assets/resource/ServerI_Menual_02.png": "78ddc401ba74df9d6d49c0e7835f183c",
"assets/resource/star.png": "6c35d16b88166dba6baa5737263717a3",
"assets/resource/fonts/Pretendard-Regular.otf": "84c0ea9d65324c758c8bd9686207afea",
"assets/resource/fonts/lg_font.ttf": "a53bfb6e554bc54bce73a1d56bb2225b",
"assets/resource/fonts/Pretendard-Black.otf": "de507f665f6ea63a94678e529b2a4ff0",
"assets/resource/fonts/Pretendard-Medium.otf": "13a352bd44156de92cce335ce93cd02d",
"assets/resource/fonts/Pretendard-Light.otf": "de308b576c70af4871d436e89918fdf6",
"assets/resource/fonts/Pretendard-ExtraBold.otf": "67e8e4773c05f2988c52dfe6ea337f33",
"assets/resource/fonts/Pretendard-Bold.otf": "f8a9b84216af5155ffe0e8661203f36f",
"assets/resource/fonts/Pretendard-Thin.otf": "32c8b7e405cd546866e5ef1d33179cba",
"assets/resource/fonts/Pretendard-ExtraLight.otf": "049bb07edff45e5817fa4f892ebabe98",
"assets/resource/fonts/Pretendard-SemiBold.otf": "6fe301765c4f438e2034a0a47b609c61",
"assets/fonts/MaterialIcons-Regular.otf": "b52f177a23303e12533061192c949e5e",
"canvaskit/skwasm.js": "87063acf45c5e1ab9565dcf06b0c18b8",
"canvaskit/skwasm.wasm": "4124c42a73efa7eb886d3400a1ed7a06",
"canvaskit/chromium/canvaskit.js": "0ae8bbcc58155679458a0f7a00f66873",
"canvaskit/chromium/canvaskit.wasm": "f87e541501c96012c252942b6b75d1ea",
"canvaskit/canvaskit.js": "eb8797020acdbdf96a12fb0405582c1b",
"canvaskit/canvaskit.wasm": "64edb91684bdb3b879812ba2e48dd487",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
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
