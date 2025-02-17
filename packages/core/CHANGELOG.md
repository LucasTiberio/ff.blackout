# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## [1.74.2](https://github.com/Farfetch/blackout/compare/@farfetch/blackout-core@1.74.1...@farfetch/blackout-core@1.74.2) (2022-12-06)


### Bug Fixes

* **core:** reset analytics' setUser promise when user is anonymized ([24d447d](https://github.com/Farfetch/blackout/commit/24d447d0714cdaef64567a2dc85e0690e428dbdd))





## [1.74.1](https://github.com/Farfetch/blackout/compare/@farfetch/blackout-core@1.74.0...@farfetch/blackout-core@1.74.1) (2022-11-29)

**Note:** Version bump only for package @farfetch/blackout-core





# [1.74.0](https://github.com/Farfetch/blackout/compare/@farfetch/blackout-core@1.73.2...@farfetch/blackout-core@1.74.0) (2022-11-22)


### Features

* **core:** add user and guestUser benefits endpoints ([cb6067d](https://github.com/Farfetch/blackout/commit/cb6067dfad27300c792adde5f323e33702c8eda0))
* **core:** update seo metadata endpoint ([59eb80b](https://github.com/Farfetch/blackout/commit/59eb80b2ba264099b6f3a71a08442cf101b439c2))





## [1.73.2](https://github.com/Farfetch/blackout/compare/@farfetch/blackout-core@1.73.1...@farfetch/blackout-core@1.73.2) (2022-11-15)


### Bug Fixes

* **core:** fix analytics' setUser middleware on logout action ([90a28e6](https://github.com/Farfetch/blackout/commit/90a28e62a39a31f697f13844c7b52d35348e1857))





## [1.73.1](https://github.com/Farfetch/blackout/compare/@farfetch/blackout-core@1.73.0...@farfetch/blackout-core@1.73.1) (2022-11-02)


### Bug Fixes

* **core:** pickup reschedule reducer ([d37403e](https://github.com/Farfetch/blackout/commit/d37403edd13be06c4c618d428ea0e294e5f1315f))





# [1.73.0](https://github.com/Farfetch/blackout/compare/@farfetch/blackout-core@1.72.1...@farfetch/blackout-core@1.73.0) (2022-10-26)


### Bug Fixes

* **core|react:** fix checkout steps mapping for GA4 and omnitracking parity ([9b2faad](https://github.com/Farfetch/blackout/commit/9b2faadaa43e0d7ce40016fec0b940e6ceb79900))


### Features

* **core:** review return endpoints ([9d2a36a](https://github.com/Farfetch/blackout/commit/9d2a36a1aaf5ed3beeb9d2064bce3066a4321b71))





## [1.72.1](https://github.com/Farfetch/blackout/compare/@farfetch/blackout-core@1.72.0...@farfetch/blackout-core@1.72.1) (2022-10-18)


### Bug Fixes

* **core:** split by merchant validation ([1bd4c0f](https://github.com/Farfetch/blackout/commit/1bd4c0fd6eb49a2d6d02898e08c72f0d2fa73f9f))





# [1.72.0](https://github.com/Farfetch/blackout/compare/@farfetch/blackout-core@1.71.0...@farfetch/blackout-core@1.72.0) (2022-09-21)


### Bug Fixes

* **core|react:** fix omnitracking's clientLanguage and clientCountry parameters ([fa79072](https://github.com/Farfetch/blackout/commit/fa7907294224757e14d0d3e7ebbf5ad54241148a))


### Features

* **core:** add new option to pass an http client to omnitracking integration ([511d69e](https://github.com/Farfetch/blackout/commit/511d69ea400450286d0aed616a01a3d77654d23e))
* **core:** add omnitracking's filters events mappings ([e7c071e](https://github.com/Farfetch/blackout/commit/e7c071e5cdee46c554fd8415fc844a6fe713495d))
* **core:** add omnitracking's interact content events mappings ([eedd1e5](https://github.com/Farfetch/blackout/commit/eedd1e5d53eb1915a394a4c202da1f1536fed1f4))
* **core:** add omnitracking's login and signup events mappings ([b5ea8c9](https://github.com/Farfetch/blackout/commit/b5ea8c953725de2f64d0e947a66112603cdbded3))
* **core:** add omnitracking's product clicked event mappings ([fca901d](https://github.com/Farfetch/blackout/commit/fca901d157478552a78e440150db5c68adf10a25))
* **core:** add omnitracking's product updated events mappings ([80f58c7](https://github.com/Farfetch/blackout/commit/80f58c7f27161e06f44ccc82ae8ae5e6704326b6))
* **core:** add omnitracking's scroll track on interact content event mappings ([3101612](https://github.com/Farfetch/blackout/commit/3101612d7065ffa0bd3d79f3d5bb85fc22499e1c))
* **core:** add omnitracking's select content events mappings ([71f38bb](https://github.com/Farfetch/blackout/commit/71f38bbeed75b115e91d568292746e2ebb0cca31))
* **core|react:** share uuid between omnitracking and google analytics 4 ([178f15e](https://github.com/Farfetch/blackout/commit/178f15e42c2ad5158ada84d2701afea145920044))





# [1.71.0](https://github.com/Farfetch/blackout/compare/@farfetch/blackout-core@1.70.0...@farfetch/blackout-core@1.71.0) (2022-09-13)


### Features

* **core:** add omnitracking's address info mappings ([40cb61a](https://github.com/Farfetch/blackout/commit/40cb61a7bc73f5e2251abc1fbef68066a9bf4942))
* **core:** add omnitracking's bag events mappings ([a0a7388](https://github.com/Farfetch/blackout/commit/a0a7388295c905569de56e988ee083c93c1129f5))
* **core:** add omnitracking's payment info mappings ([1e73237](https://github.com/Farfetch/blackout/commit/1e73237ba41e225fecbc354ec1a2626e5a9c9d4c))
* **core:** add omnitracking's shipping mappings ([d76a483](https://github.com/Farfetch/blackout/commit/d76a48308df72ba11c3a7b2d35b75bdadf9c9f44))
* **core:** add omnitracking's wishlistbag events mappings ([f679b1c](https://github.com/Farfetch/blackout/commit/f679b1c99a85b8b47e39b050f3af1d2b28efe4d4))
* **core:** update omnitracking's contract to v1.15 ([548d914](https://github.com/Farfetch/blackout/commit/548d91491cd64f691a8c7af74123e2e41653c7bb))





# [1.70.0](https://github.com/Farfetch/blackout/compare/@farfetch/blackout-core@1.69.0...@farfetch/blackout-core@1.70.0) (2022-09-06)


### Bug Fixes

* **client:** change post address request response ([06f3d31](https://github.com/Farfetch/blackout/commit/06f3d31c8f23cbce73e769bc0df2beb1fe6213da))


### Features

* **core:** add omnitracking's checkout started event mappings ([4032409](https://github.com/Farfetch/blackout/commit/403240974aa07a06928985ab284d547326b2f940))
* **core:** add omnitracking's generic page mappings ([81cdfbb](https://github.com/Farfetch/blackout/commit/81cdfbbe656cbc8341cbe0b7beef11d80e0d6005))
* **core:** add omnitracking's homepage mappings ([cd32983](https://github.com/Farfetch/blackout/commit/cd32983be1d9cdfb6b2df9ad3ee2ea196a58ce55))
* **core:** add omnitracking's order completed mappings ([9cf04ca](https://github.com/Farfetch/blackout/commit/9cf04ca5b2a83a296d99ebed5268693b887140e9))
* **core:** add omnitracking's place order started event mappings ([e3cd956](https://github.com/Farfetch/blackout/commit/e3cd95601c381a38b4e44b4c28b7f17ed38c0e1b))
* **core:** add omnitracking's promocode mappings ([233fd85](https://github.com/Farfetch/blackout/commit/233fd8557a50eb366238da97e05ac6f384a7e745))
* **core:** add omnitracking's share event mappings ([9f40217](https://github.com/Farfetch/blackout/commit/9f40217b4ebe628648872a3a59a476dcf8fa6e6c))
* **core:** add omnitracking's signup newsletter mappings ([0ad25d4](https://github.com/Farfetch/blackout/commit/0ad25d497c349555996a0383850b8bfe3fb55e1b))





# [1.69.0](https://github.com/Farfetch/blackout/compare/@farfetch/blackout-core@1.68.0...@farfetch/blackout-core@1.69.0) (2022-08-30)


### Features

* **core:** add new selector for order splitting ([3612d99](https://github.com/Farfetch/blackout/commit/3612d991150f3eada751b5e8015abff05ae1f739))
* **redux:** add request pagination on commercepage v2 endpoint ([f81fe86](https://github.com/Farfetch/blackout/commit/f81fe8659e06662613f6a461451330605563b905))
* **redux:** add result return on doGetProfile ([cd80da1](https://github.com/Farfetch/blackout/commit/cd80da17e3f15f09cd8c4046419fc07710ac4d4b))





# [1.68.0](https://github.com/Farfetch/blackout/compare/@farfetch/blackout-core@1.67.0...@farfetch/blackout-core@1.68.0) (2022-08-09)


### Bug Fixes

* **core:** fix omnitrackings's 'navigatedFrom' parameter logic ([f82e0d0](https://github.com/Farfetch/blackout/commit/f82e0d08fe1104c490dc81bca2baf20b05ea26a8))


### Features

* **core:** add omnitracking's bag page tracking mappings ([70e0e27](https://github.com/Farfetch/blackout/commit/70e0e27dde370b15c4721674b0d40886ab5ea6f7))
* **core:** add omnitracking's checkout abandoned event mappings ([d761c2c](https://github.com/Farfetch/blackout/commit/d761c2cca1eecc04e776b4d62697a7306203d9ea))
* **core:** add omnitracking's checkout page tracking mappings ([3a07a1f](https://github.com/Farfetch/blackout/commit/3a07a1f85482976177e4e233411e80c047228f3f))
* **core:** add omnitracking's edit checkout step tracking mappings ([d4aba32](https://github.com/Farfetch/blackout/commit/d4aba32a95034633e25c1cdb81b65bc2e180e9db))
* **core:** add omnitracking's wishlist page tracking mappings ([9512805](https://github.com/Farfetch/blackout/commit/95128057e25a452742142b00dca2859d9786c116))





# [1.67.0](https://github.com/Farfetch/blackout/compare/@farfetch/blackout-core@1.66.0...@farfetch/blackout-core@1.67.0) (2022-08-03)


### Features

* **core:** add omnitracking's product detail page tracking mappings ([cc0ad62](https://github.com/Farfetch/blackout/commit/cc0ad62d36e6d702dd400d8847d361305a52c0fb))





# [1.66.0](https://github.com/Farfetch/blackout/compare/@farfetch/blackout-core@1.65.0...@farfetch/blackout-core@1.66.0) (2022-07-27)


### Bug Fixes

* **core|redux:** fix hash creation for pagination props and commercepages ([1948e2d](https://github.com/Farfetch/blackout/commit/1948e2df571bbff80a450519c4d0347ee269bcba))


### Features

* **core|react:** add analytics SPA page referrer context ([8d3005d](https://github.com/Farfetch/blackout/commit/8d3005da2ee48bd7f6c2fc62844bf751278dceaf))
* **core|redux:** add order change address endpoints ([6f50fc8](https://github.com/Farfetch/blackout/commit/6f50fc81b01869d1e1c7356ca06cfb7fcff6b61b))


### Reverts

* Revert "feat(core|redux): add order change address endpoints" ([41b94e9](https://github.com/Farfetch/blackout/commit/41b94e917f81d6aabbcfbdc8386fc231de29ccc8))
* Revert "fix(core|redux): fix hash creation for pagination props and commercepages" ([b2f00e4](https://github.com/Farfetch/blackout/commit/b2f00e446f233556073f918de7a89277596c1873))





# [1.65.0](https://github.com/Farfetch/blackout/compare/@farfetch/blackout-core@1.64.0...@farfetch/blackout-core@1.65.0) (2022-07-19)


### Bug Fixes

* **core|react:** hash creation on content pages ([b5ea2b9](https://github.com/Farfetch/blackout/commit/b5ea2b9a74ac6ec3505fed4f4f5af96d3ed08735))


### Features

* **blackout-core:** add lineItems omnitracking mapping ([705e910](https://github.com/Farfetch/blackout/commit/705e910f411ee99be7f8935f0f650189aca3078f))





# [1.64.0](https://github.com/Farfetch/blackout/compare/@farfetch/blackout-core@1.63.0...@farfetch/blackout-core@1.64.0) (2022-07-14)


### Features

* **core:** add new get groupingProperties endpoint ([2a3e9b2](https://github.com/Farfetch/blackout/commit/2a3e9b258af2b222048493ec3db5652206e8e99e))





# [1.63.0](https://github.com/Farfetch/blackout/compare/@farfetch/blackout-core@1.62.0...@farfetch/blackout-core@1.63.0) (2022-07-12)


### Features

* **client|redux:** add applepaysession related packages ([6950a3a](https://github.com/Farfetch/blackout/commit/6950a3a56d8ef03ad179efd455f20d2b16673026))
* **core:** add omnitracking's product list page missing parameters ([0312327](https://github.com/Farfetch/blackout/commit/031232791bef8dd936896dc1a3eacf981fd92d44))





# [1.62.0](https://github.com/Farfetch/blackout/compare/@farfetch/blackout-core@1.61.0...@farfetch/blackout-core@1.62.0) (2022-07-05)


### Features

* **core:** add currency to omnitracking's pre-calculated parameters ([406c0b3](https://github.com/Farfetch/blackout/commit/406c0b38e58593cece521b8e98aed41c793049b1))
* **redux:** map requestSourceCountryCode key to locale reducer and create getCountryCultures method ([b5ea80c](https://github.com/Farfetch/blackout/commit/b5ea80c4b4fb354dd13120246fc626eaab6afe87))





# [1.61.0](https://github.com/Farfetch/blackout/compare/@farfetch/blackout-core@1.60.0...@farfetch/blackout-core@1.61.0) (2022-06-28)


### Features

* **core:** add new client contentpages ([c21896c](https://github.com/Farfetch/blackout/commit/c21896c80a4b0afecfc57c53b0ed09d443cbe077))





# [1.60.0](https://github.com/Farfetch/blackout/compare/@farfetch/blackout-core@1.59.0...@farfetch/blackout-core@1.60.0) (2022-06-22)


### Features

* add client and redux for commerce grouping endpoint ([a5bfd12](https://github.com/Farfetch/blackout/commit/a5bfd126b0747dcee957bb77dd59e4dd64e82f7f))





# [1.59.0](https://github.com/Farfetch/blackout/compare/@farfetch/blackout-core@1.58.2...@farfetch/blackout-core@1.59.0) (2022-06-14)


### Features

* **core:** new recover password endpoint ([0189571](https://github.com/Farfetch/blackout/commit/0189571b3f278a320bba5efbeee3b6b7ccb2681f))





## [1.58.2](https://github.com/Farfetch/blackout/compare/@farfetch/blackout-core@1.58.1...@farfetch/blackout-core@1.58.2) (2022-06-08)


### Bug Fixes

* fix gender filter segment without description ([5f4e7f9](https://github.com/Farfetch/blackout/commit/5f4e7f9e641324253f2488fc9b394d3bd7bfd6b8))





## [1.58.1](https://github.com/Farfetch/blackout/compare/@farfetch/blackout-core@1.58.0...@farfetch/blackout-core@1.58.1) (2022-05-31)


### Bug Fixes

* add fallback for filter segments without facet ([1c18283](https://github.com/Farfetch/blackout/commit/1c18283b3434f28336b2475f275d727ad6999587))





# [1.58.0](https://github.com/Farfetch/blackout/compare/@farfetch/blackout-core@1.57.0...@farfetch/blackout-core@1.58.0) (2022-05-17)


### Bug Fixes

* **blackout-core:** fix omnitracking parameters ([b6720d3](https://github.com/Farfetch/blackout/commit/b6720d35cef2b0532d9e3123a2c61e9772d248cd))
* **core:** fix pickup capabilities timestamp parsing ([d77bdf8](https://github.com/Farfetch/blackout/commit/d77bdf848b91ad5905d64b0c00258f0ebc9d9250))


### Features

* add the `facetId` to the `filterSegments` on the `searchResult` entity ([08024c4](https://github.com/Farfetch/blackout/commit/08024c4bf27de2087e213c6fb75ffa5921d1dbc2))





# [1.57.0](https://github.com/Farfetch/blackout/compare/@farfetch/blackout-core@1.56.1...@farfetch/blackout-core@1.57.0) (2022-05-10)


### Features

* **core:** add reschedule endpoints ([c1fee3e](https://github.com/Farfetch/blackout/commit/c1fee3eb7c95d5ceb5ae558bca3e4068f0d25cc9))





## [1.56.1](https://github.com/Farfetch/blackout/compare/@farfetch/blackout-core@1.56.0...@farfetch/blackout-core@1.56.1) (2022-05-06)


### Bug Fixes

* **core:** include metadata into contents redux from first render ([ae4e47e](https://github.com/Farfetch/blackout/commit/ae4e47ebc75ddad962681a40a3aadf927ea94f56))





# [1.56.0](https://github.com/Farfetch/blackout/compare/@farfetch/blackout-core@1.55.0...@farfetch/blackout-core@1.56.0) (2022-05-03)


### Bug Fixes

* **core:** fix phone tokens endpoints requests ([fca7d8b](https://github.com/Farfetch/blackout/commit/fca7d8b53a1090b85d88e74e03e5f83c0bd4ceca))


### Features

* **blackout-core:** use previous store data of analytics bag on update event ([a3f5823](https://github.com/Farfetch/blackout/commit/a3f582313959303017182b544c80db25b9101322))
* **core:** add personal id and image endpoints ([34f66f9](https://github.com/Farfetch/blackout/commit/34f66f9801870364400cafc561edabf0e1e8c83b))
* **core:** add personal ids endpoints ([1e6ab58](https://github.com/Farfetch/blackout/commit/1e6ab582e5a09fd7fcb63f21d7d40300a460c4f8))





# [1.55.0](https://github.com/Farfetch/blackout/compare/@farfetch/blackout-core@1.54.0...@farfetch/blackout-core@1.55.0) (2022-04-19)


### Features

* **core:** add phone token validation endpoints ([47bdf44](https://github.com/Farfetch/blackout/commit/47bdf448c38b2efa84bde6a79e2d47f831af13c3))





# [1.54.0](https://github.com/Farfetch/blackout/compare/@farfetch/blackout-core@1.53.3...@farfetch/blackout-core@1.54.0) (2022-04-13)


### Features

* **blackout-core:** update Omnitracking contract to v1.13 ([d654027](https://github.com/Farfetch/blackout/commit/d65402784e05228be311e62d06b016244d43d72d))





## [1.53.3](https://github.com/Farfetch/blackout/compare/@farfetch/blackout-core@1.53.2...@farfetch/blackout-core@1.53.3) (2022-04-07)


### Bug Fixes

* **blackout-core:** fix `getWishlistItemIdFromAction` function ([3beca11](https://github.com/Farfetch/blackout/commit/3beca11f1bc2235a3a6939e354d4e91a18b07917))
* **blackout-core:** fix logout in axios interceptor ([ebe7738](https://github.com/Farfetch/blackout/commit/ebe7738e4b09f412a049d5938816709229a2c1f3))





## [1.53.2](https://github.com/Farfetch/blackout/compare/@farfetch/blackout-core@1.53.1...@farfetch/blackout-core@1.53.2) (2022-03-29)


### Bug Fixes

* **blackout-core:** fix doUpdateUserSubscriptions action ([0870025](https://github.com/Farfetch/blackout/commit/0870025ef823ec3ed2e00f31689ed3542c235729))





## [1.53.1](https://github.com/Farfetch/blackout/compare/@farfetch/blackout-core@1.53.0...@farfetch/blackout-core@1.53.1) (2022-03-22)


### Bug Fixes

* **core:** implement fallback commerce page metadata string ([a1bb4eb](https://github.com/Farfetch/blackout/commit/a1bb4eb30613773217d3e04bb41fca0e8b0da237))





# [1.53.0](https://github.com/Farfetch/blackout/compare/@farfetch/blackout-core@1.52.1...@farfetch/blackout-core@1.53.0) (2022-03-16)


### Features

* **core:** add update and delete ordeer item actions ([ca74434](https://github.com/Farfetch/blackout/commit/ca74434ac176a065c11d7b5a996ff01f8b133409))
* **core:** add update and delete order item endpoints ([bc161e1](https://github.com/Farfetch/blackout/commit/bc161e1fbb8e6356479d82e25412eabef178fa6b))





## [1.52.1](https://github.com/Farfetch/blackout/compare/@farfetch/blackout-core@1.52.0...@farfetch/blackout-core@1.52.1) (2022-03-08)


### Bug Fixes

* **core:** add `groupsOn` to the sizes facet's entity id ([7300e3d](https://github.com/Farfetch/blackout/commit/7300e3de0f15b5a713defccbe16e970ebd986ad7))





# [1.52.0](https://github.com/Farfetch/blackout/compare/@farfetch/blackout-core@1.51.0...@farfetch/blackout-core@1.52.0) (2022-03-01)


### Bug Fixes

* **redux:** add missing reducers and selectors for activities endpoints ([12b17f3](https://github.com/Farfetch/blackout/commit/12b17f32277ea97a659f92880335f9982257ec32))


### Features

* **core:** update order of components and fix ranking on merge strategy for commerce pages ([34c3fc8](https://github.com/Farfetch/blackout/commit/34c3fc87c5ab42e37919dd4a03f6c09bb0116433))





# [1.51.0](https://github.com/Farfetch/blackout/compare/@farfetch/blackout-core@1.50.0...@farfetch/blackout-core@1.51.0) (2022-02-23)


### Features

* **core:** add new mapper on omnitracking integration to calculate parameters from data object ([50efd81](https://github.com/Farfetch/blackout/commit/50efd817eb07cc95efb3dc88c41e8b62d3c98f9b))
* **redux:** add operations actions ([201f01b](https://github.com/Farfetch/blackout/commit/201f01bdbcd132f78136e94f294027f7e1164dd9))





# [1.50.0](https://github.com/Farfetch/blackout/compare/@farfetch/blackout-core@1.49.0...@farfetch/blackout-core@1.50.0) (2022-02-15)


### Bug Fixes

* remove GA4 non essential events ([c053eda](https://github.com/Farfetch/blackout/commit/c053eda69b124995444422f7b9ff5a60a97e3c03))


### Features

* **client|redux:** add order activities endpoints ([d4dbea1](https://github.com/Farfetch/blackout/commit/d4dbea16bb3b55c7bfa3e0270a92346cd1ee5fbb))
* **core:** add operations endpoints ([e6bac3b](https://github.com/Farfetch/blackout/commit/e6bac3bc3302462fef1cfa946021c132c7d74cd4))





# [1.49.0](https://github.com/Farfetch/blackout/compare/@farfetch/blackout-core@1.48.0...@farfetch/blackout-core@1.49.0) (2022-02-08)


### Bug Fixes

* **core|react:** fixed GA4 mappings and improved wishlist middleware ([10cb459](https://github.com/Farfetch/blackout/commit/10cb4599b4e7157461c771f142882d8ee86edf01))


### Features

* **core|react:** add signup newsletter event mappings in GA4 ([3603cc7](https://github.com/Farfetch/blackout/commit/3603cc7aab1affa545f3c8f37b09325f12826a0f))





# [1.48.0](https://github.com/Farfetch/blackout/compare/@farfetch/blackout-core@1.47.0...@farfetch/blackout-core@1.48.0) (2022-02-02)


### Features

* **core:** add new unsubscribe client ([68d6f38](https://github.com/Farfetch/blackout/commit/68d6f384f086f395abf94513c9dde191b0c2968e))





# [1.47.0](https://github.com/Farfetch/blackout/compare/@farfetch/blackout-core@1.46.1...@farfetch/blackout-core@1.47.0) (2022-01-25)


### Features

* **core:** create client search translations ([3970407](https://github.com/Farfetch/blackout/commit/397040701d245287027ceb5ddca7d3b66501a51a))





## [1.46.1](https://github.com/Farfetch/blackout/compare/@farfetch/blackout-core@1.46.0...@farfetch/blackout-core@1.46.1) (2022-01-18)


### Bug Fixes

* **core:** add `id` to the listing server initial state ([85cf576](https://github.com/Farfetch/blackout/commit/85cf57628d9bfae8e54e2ab925d33f5d1afd0436))





# [1.46.0](https://github.com/Farfetch/blackout/compare/@farfetch/blackout-core@1.45.1...@farfetch/blackout-core@1.46.0) (2022-01-12)


### Bug Fixes

* **core:** fix returns account migration service tests ([526bd33](https://github.com/Farfetch/blackout/commit/526bd3357646fc1869326095e4f5fab72a84703b))


### Features

* **core:** implement new return endpoints ([178b913](https://github.com/Farfetch/blackout/commit/178b913dca1488e0e7c9807115c45d4c2bc9840f))





## [1.45.1](https://github.com/Farfetch/blackout/compare/@farfetch/blackout-core@1.45.0...@farfetch/blackout-core@1.45.1) (2022-01-04)


### Bug Fixes

* **core:** pass result into entries object ([5c0b2b3](https://github.com/Farfetch/blackout/commit/5c0b2b3f3db3b1cf232cc4d64b9eec0e1847cbb6))





# [1.45.0](https://github.com/Farfetch/blackout/compare/@farfetch/blackout-core@1.44.0...@farfetch/blackout-core@1.45.0) (2021-12-22)


### Bug Fixes

* **core:** fix getPromotionEvaluationItemById ([fc4c7c1](https://github.com/Farfetch/blackout/commit/fc4c7c15f150db91172955a6b22d0ea4fe5e1262))


### Features

* **core:** add additional user attributes client ([8c77c25](https://github.com/Farfetch/blackout/commit/8c77c2582fa8df4b98d170bf2395f74cacd5565e))





# [1.44.0](https://github.com/Farfetch/blackout/compare/@farfetch/blackout-core@1.43.0...@farfetch/blackout-core@1.44.0) (2021-12-14)


### Bug Fixes

* **core:** allow `useBagItem`'s to work without `productAggregator` ([4cc934c](https://github.com/Farfetch/blackout/commit/4cc934c3dd48db1f93847b5e93b6c18eaba573a8))
* **core|react:** handle guest users expired in authentication provider ([5270108](https://github.com/Farfetch/blackout/commit/527010839b0453b91454a293d5805740f7bdcbac))


### Features

* **core:** add promotionEvaluations endpoints ([82cd337](https://github.com/Farfetch/blackout/commit/82cd337ea59adc031f1689dc49b0021ea91064af))
* **core|react:** add support for GA4 custom events ([e8416ca](https://github.com/Farfetch/blackout/commit/e8416ca9011de97b567e8ffc3d34bf93c9229eda))





# [1.43.0](https://github.com/Farfetch/blackout/compare/@farfetch/blackout-core@1.42.0...@farfetch/blackout-core@1.43.0) (2021-12-07)


### Bug Fixes

* **core:** remove server initial state entries in product/details ([c8f10e0](https://github.com/Farfetch/blackout/commit/c8f10e07d4e6cf5100c9e5b6a737895fcee0751e))
* **redux:** make `getItemWholeQuantity` return 0 when there's no bag ([53659de](https://github.com/Farfetch/blackout/commit/53659de880446b95817cc43c41e176162d2e2766))


### Features

* **core:** add commerce pages redux ([0646624](https://github.com/Farfetch/blackout/commit/0646624cd93216d6a01ab59f06a47e4c9bb0a19e))
* **core:** add productAggregatorId to add to bag requests ([46f3e84](https://github.com/Farfetch/blackout/commit/46f3e84a6055f77df56553037ffa1044a35cbdfd))





# 1.42.0 (2021-11-23)


### Features

* migrate `core` and `react` packages ([b2635ab](https://github.com/Farfetch/blackout/commit/b2635ab3a3a714a2166a38d9463a9e327902b1ca))
