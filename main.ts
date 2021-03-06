namespace SpriteKind {
    export const arma = SpriteKind.create()
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    Arma_de_ninja = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . b . . . . . . . 
        . . . . . . . b d b . . . . . . 
        . . . . . . . c d c . . . . . . 
        . . . . . . . c 5 c . . . . . . 
        . . . . . . c d 5 d c . . . . . 
        . . . b c c d 5 5 5 d c c b . . 
        . . b d d 5 5 5 2 5 5 5 d d b . 
        . . . b c c d 5 5 5 d c c b . . 
        . . . . . . c d 5 d c . . . . . 
        . . . . . . . c 5 c . . . . . . 
        . . . . . . . c d c . . . . . . 
        . . . . . . . b d b . . . . . . 
        . . . . . . . . b . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.arma)
    Arma_de_ninja.setPosition(mySprite.x, mySprite.y)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Player, function (sprite, otherSprite) {
    sprite.destroy(effects.warmRadial, 500)
    info.changeLifeBy(-1)
})
sprites.onOverlap(SpriteKind.arma, SpriteKind.Projectile, function (sprite, otherSprite) {
    projectile.destroy(effects.spray, 100)
    Arma_de_ninja.destroy(effects.spray, 100)
})
info.onLifeZero(function () {
    game.over(false)
})
let Arma_de_ninja: Sprite = null
let projectile: Sprite = null
let mySprite: Sprite = null
scene.setBackgroundImage(img`
    1196669bcccbd11d3bbebeb3ddbbb68888888666668888fffffffffffff8888888888ffffffffffffffffffffffffffffffffffffffffffffff888888cccbbccb68fccebbbdddccbdddd3b3bcfffffc
    ddb666dbcfcb3ddd3bbeeebb33bbbc8f888888888888888fffffffffff88888888888ffffffffffffffffffffffffffffffffffffffffffffff888888cccbbccbc8fcceebbdddccbddddbbdbcfffffc
    bdb869dbcfcb3dd333beeebbb33bbc8f888888888888888888fff888888888888888fffffffffffffffffffffffffffffffffffffffffffffff888888cccbbccccffcceebbddbccbddd3bbdbcfffffc
    bbb86bdbcfcb3dd33bbeeebbbbddbc8f888fff8cc888888888888888888888888888ffffffffffffffffffffffffffffffffffffffffffffffff88888ccccbccccffccebbbddbccbddddb3bbccfffcc
    bbc86ddbcfcb3d33bbbeeebbbbdddc8f888fff679cff8c7688888888888888888888fffffffffffffffffffffffffffffffffffffffffffffffff8888ccccbccccffcceebbbddccbb3dd3bbbccffffc
    bbc86bdbcfcb3d3bbbbbebbbbbdddc8f888fff7996fff69968888888888888888888ffffffffffffffffffffffffffff88fffffffffffffffffff88888cccbccccffcceebbbdbcccbb3dbbbbccfffff
    ebc86b3bcfcb333bbbbbbbbbbbdddccf888fff7999cff797cffff888888888888888ffffffffffccfffffffffffffff88c668888ffffffffffffff8888ccccccccffcccebbbdbcccbbbd3bbbccfffff
    cbc8bddccfcc3d3bbbb3bb3bb3dddccccccfff79997ff799cc6cffffff8866888888c33bb66668cccffccffffffffff88697c88fffffffffffffff88fffcccccccffcccebbbbbcccbbbb3bbbccfffff
    ebccbb3ccfcc3333bebbbbb3b3dddccccccffc99999cf799c697fffffff699c888c3becff888666cff699cfffffff6cf8697ffffffffffffffffff8fffffccccccffcccebbbbbcccbbbb3bbbccfffff
    bbccbd3ccfccd1d3beebbb3333dddbcccccffc799997c797cc7cffffffff66fffb2effffffff8866ffc66fffffff697cf697ffffffffffffffffff8fffffccccccffcceebbbbbcccbbbbbbbbccfffff
    bbccbd3ccccbd1d3bbeebb3333dddcccccccfc997799c997cfffcccfffffffffb2effffffffc6cf66fffffffffff697ff797ffffffffffffffffff8fffffccccccffcccebbbbbcccbbbbbbbbccfffff
    bbccb33ccccbddd3bbbebb3333dddbcccfcccc9976997997c67669996cfc76f69977ceccfffc999668c77fc997c79999679997cfffffffffffffffffffffccccccffcccebbbbbcccbbbbbbbbccfffff
    ccccbd3cffcb3d33bbbbbbb333dddccccccccc997c7999996697699997cc97799999cffff8f6999999697699997999996799999cffffffffffffffffffffccccccffcccebbbbbcccbbbbbbbbccfffff
    8cccbbbcffcb3333bbbbbbbb33dddbcceecccc999c6999996797799699669799bc99cffffff7976999797796c97c797cc7976997cfffffffffffffffffffccccccfffccebbbbbcfccbbbbbbbccfffff
    ff8cbbbcffcbd333eeebbbbb33d1dccceecccc999cc79999c997799879769999ec99eeecc88799f79999779cc99c797ff797f699cfffffffffffffffffffccccccfffccbbbcbbccccbbbdbbbccfffff
    ff8cbbbcff8bdd34222bbbbb33dddbcceeccfc999c869999c997799879769799bc99cffffff7998799999796c97c6996f797fc99cfffffffffffffffffffccccccfffccbcccbbccccbbbdbbb6cfffff
    cffcbbbcff8bdd332222bbbb33dddccceeccfc997cfc7997c797797f79779db99999cffffff7978997999699997c69997797f699cffffffffffffffffffcccccccfffccccccbbcfccbbbbbbb6cffffc
    cffcb3bcffcbd133b2222bbb33dddbccceecfc776fffc976f797797f77679bc799bbcffffcf797f796997fc7997c869999968676cffffffffffffffc6fccccccccfffcccccbbbccccbbbbbbb68fffcc
    cffcbbbcffcb3dd3b22222b333dddccceeeccffffffffffffffffffff7999bffeeeeefeecc68fffff686fc79997f8888ccc888ffffffffffffffff96fcccccccccfffccccbbbbcccbbbbbbb668ffccc
    cf8cbbbcffcb3333b222222333dddbceeeecccfff88ffffffffffffff699bcffee2bb3bbcdf8fffff866ff7997cfffffffffffffffffffff8fffc1688cccccccccfffcccccbbbbcccbbcbbb668fcccc
    cfccb3bcffcb333bbe22222333dddcceeecccccffffffffffffffffffcccefff22deedbccb688fffff666ffccfffffffffffffffffffffff88fb16f8ccccccccccfffcccccbbbbcccbbbbb666cccccc
    ccccbbbcffcb33bbbb22222333dddbcebecccccfffffffffffffffffffffefffeebde3efcbbcffffff8668fffffffff88ffffffffffffff888116ffccccccccccccffccccccbbbc8cbbbb66666ccc66
    cccbbbbcffcbddbee2eb222333dddecebecfcccfffffffffffffffffffffefeffedddbcfff88ffffff8689fffffffccccffffffffffffffc61968ffccccccccccccffccccccbbccfcbb666666666666
    ccccbbcff8cbd3beee2eb44433dddbcbbbcffccfffffffffffffffffffffef2efeeebbcffffff8fff8f8868fffffccccccccccccccffffc91968cfcccccccccccccffccccccbbc8fcbb666666666699
    cccbbbccf88bddbbeee2b44433dd3ecbbbcfffffffffffffffffffffffffef2fffeeebcffffff8fff88ff86ffff8ccebbeeeeebbbccffc19668cfccbcccbbbcccccffcccccbbbc8fc66666666666996
    cccbbbcff88bddbbeee2e24433dddbcebecfffffffffffffffffffffffffeeeffffccecffffff8ff88ffff6fff88ccebb44bbbbbbecfd1666ffffcbbbcbbbbecbccffcccccbbbb8f866666666669666
    cccbbbcff88bddbbeeeee22433dd3ecebecfffffffffffffffffffffffffe2efffffcccffffff8ff8fffff6f6666696bb444eebbbcc1dc66ffffccbbbcbbbbecbccffccccbbbbbc8866666666996666
    cccbbbcff88bddbbeceee22333dddbcebecfffffffffffffffffffffffffeeefffffcccffffffff8f8ffff6668ff8699999999cbbd1bf6688cccccb3bcbbbbcccccffccccccbbb88866666669966686
    cccbbbcff88b33bccceeeeeb33dd3ecebecfffffffffffffffffffffffffeeeefffffccffffff8fff8fff8ffffff88ff666966eb11cf916fcfccccb3bbbbbbcccccffcccccccbb8f866666699666688
    cccbbbcff88bbbbcccbeeeeb33dddbccbecfffffffffffffffffffffffff22eeffffffccffff6fffffffffffffff88888f8ff8b196691bfcffccccb3bbbbbbcccccffcccccccbb8f866666666666668
    cccbbbcff88b3becccceeebbb3dd3bceeecfffffffffffffffffffffffffe2eeffffffcccff6cffffffffffffffff68868f6fd16c611cffffccccbb3bbbb3beccccffcccccccb68f866666668866666
    cccbbbcff88bbbeececcebbbb3dddbceeeccfffffffffffffffffffffffff22effffffccffbcfffffffffffff8f86866cf86196691dffffffccccbb3bbbb3beccccffcccccccc6c8866666888866666
    cccbbbcff88b3beeeececbbbb3dd3beebeccffffffffffffffffffffffffff2ecfffffffccfffffffffff8fff8866666f8916c611bcc8fffccccceb3bbbbbbeccccffcccccccc688866668888866666
    cccbbbcff8cbdbeeeeeeebbb33dddbebbeccfffffffffffffffffffffffffffefcffffffcfffffffffff8fffff66666ff1196911cbcfffffccccceb3bbbbbbcccc8ffccbccffc6cf866668888866668
    cccbbbcff8cb33eeeeeeebbb333dbbebbeecfffffffffffffffffffffffffcbeeffffffcffffff8ffff8f88886866cfc196691bbbbcccffcccccceb3bbbddbcccc8ffcccccffc688866666888866666
    cccbbbcff8cbd3beeeeeeeb3333dbbebbeecffffffffffffffffffffffedd3eecccfffffffffc8ffffffff6888868fd16691166bbbccccccccccceb3bbbddbcccc8ffcccccff8688866666888866666
    cccbbccff86bd3bbeeeeeebb333dbcebbbecfffffffffffffffffffc333eeebbcccffffffffcffffffffff68688ff19889119966bbccccccccccceb3bbbbbbcccc8fffcccccf8688866666888666696
    cccbbccff86b3bbbeeeeeeeb33ddbccbbbecfffffffffffffffffff22eeeeedcfcccfffffccfcfffffff8ff688fb16f6919666669bccbcccccccccbbbbbccccccc8fffcccccf8688866666888666696
    eeebbccff8cb3beeeeeeeeeeb3ddbcceeeecfffffffffffffffffff2eeeeecfcccffcfffccccccccfff888f88fd1f86116fff88f8696cccccccccebbeccccccccc8fffccccff8688866666888666666
    bbbbbccff86bbbeeeeeeeee2b3ddbcfceecffffffffffffffffffffeeeeeffceccffcffccfccbbffff88f888c1df89198fff888f88669ccccbbbbbbbccfffccccc8ffcccccff8688866666888666666
    bbbbbccff8cbbbceeeeeeee2b33dbcffeeecccccccccccccccccccc2eefffffbfcfccccffffcfffff88ff8fb1cf6916ffff88866866869cccbdddddbcffffccccc88f8ccccf88688866666888666966
    bbbbbccff8cbdbeeee222222333dbcfceeeeeeeeeeeeeeeeeeeebbe2effffffcbffcccfffffff88fff8f8899f86998fffffffff88886869cbddddddbcffffccccc8888cccc886668886666888669966
    bbbbbbcff8cb33b344222224333dbcfeeeb4444444444bbbbbbbbb2eeefffffcfffcffffffffff8ff888616f6696fffffffffffffff88896bbdddbbbcffffccccc8888ccccc66668886666888699966
    bbbbbccff8cb333334442222333dbcceebbe2244444444444bbbbbefeffffffffccffffffffffffffffd1c88698ffffffffffffffffff869bbbbbbbbcffffccccc8888ccccc66668886666888669666
    bbbbbecff8cb334344422222433dbcceebb2222222e444eeeebbbbeffcffcfffcccfff8cffffc8fffc1986896fffffffffffffffffffff8869bbbbbbcfffcccccc8888ccccc66668886666888666666
    bbbeeccff8bb342442222222333dbcceebb222222222eee2ebbb3eeffcffffccccfcfccccfff8fffd1688898ffffffffffffffffffffff66669bbbbbccffccccccc888ccccc66668886666886666666
    bbecccfffccb3222222242243333bcceebb2222e2222ee22e33bbecffcffffccbcfccccfccffffc1df88668fffffff8fffffffffffff88ff886966bbbcffccccccc888cccccc6668886666866666666
    bbccfffffcbb342422243433333dbbcebb3422444224eeeebbeeeefffffffccbcccccbfcccfffb1cf6898fffffffffffff8fffffffffffff8886699bbccfcccccc8888cccccc6668886666666666666
    cbecffff8cb3334444433333333dbbbbbb344433334bbbbb3becffffffffffccccccbfc6cffc1df86668ffffffffffff888ff8f8fffffff88ff886696bccccccccff88ccccccbb68886666666666888
    ccccffff8cb3344444433433333dbbbbbbb4444bbb333bbbeeeffffffffffcbccccbff66cfb16f686cfffffffffffff8bb8686f8f8fffff8fff8866696ccccccccff888cccccbb68886666666888888
    fccccfff8cb334222222eebbb333beebbbbeeeeee2eee2eefecffffffffffcbdfcbfbf6ccd1f8686fffffffffffffff6cccc86ff88ffff8fff8f868869cccccccc88888ccccccbbc886666688888fff
    ccceccff88b33e22222222bbb33d3bebbbe222e2e2eefeffefffffffffffcccbbdffcf6b96f6c6cfffffffffffffff88888696ff68ffff8ffff88f88669ccccccc8f888ccccccbbc886666888888fff
    cbbbbcff88b33b222222243bb33d3bbbbbb223332eeeeeefefffffffffffcfcfccffccd9886868fffffffffffffff86f888666686f888fffff68ff88666ccccccc8ff8ffff8ccbbc8888888888888ff
    bb33bcff88b3333333333333333d3bbbbbb43333beeeeff2effffffffffccffccfcfb1966cc68ffffffffffffffff68f888666888f888ffff86ffff88669cccccc8ffffffffccbbc8888886668888ff
    bbb3bcff88b33333333334bbbb3d3beebee233332fffffffeffffffffffcfffcffcb166cc6888fffffffffffffff66cf8886688cb6f88ffff6ffffff6689cccccc8f8ffffffccbbcff88666688888ff
    cccbbcff88b33bbbbbbeeeeebb3d3becceeeeeee2e2effffeffcfffffffccffffc1b86ccb8ff8ffffffffffffff886cc8866668bbdd6c8f8f6fffff868669ccccc8f8fffff8ccbbcff8c6666688888f
    ffccccff88bbbccceeeeeeeebb33bbcccceeeeee3feeefecefccfffffcffcfffb1cccfb6ffffffffffffffffffff86cc8866666bd1ddb6dff6fffff888669cccbc8fffffffccccbcffcccc66688688f
    ccffffff886bccffcccccceebbb3bccffffffffe2feecffefffffffccfffecfdbfcccbcc8ffffffffffffff8ffff66ccfffccc6dd1dbb6bbfccfff8ff88666ccbccfffffffccccccff8cccc666c68ff
    bbccccfff86bbccfffffcccebbbbccfffffffffe2e2efffeccffffffffffecdfccfbcccc8ffff8fffffffff8fff696cccfff8cbdddddb6bd8f6ff6fff88869cbbccfffffffccccccfffcccbb6ccc888
    3bbbbcccffccccccfffffcccbbb3bcffffffffff3ceeeffeffcffffffffcddccccbcffcf88ffffffffffffffff8696cccfff8ccbdddbbcbdbff6fcfffff969cbbccfffffffccccccffccccccccccccc
    33333bbcccfcffccccccffcccbbbccfffffff8882feecfefcfffffffffc16ccfcccfffcc68fffffff88ffffff88666cccff8ccbbdddd6cbdbc8ffcffff68666bbccffffff8cc8cccffccccccccccccc
    3333333bbcccccfffccccccccbb3bcfffff88888eeeeeffefccffffffd68bcfeffffcffc688ffffff8fffffff8689bcccffc66cbd1db6cbdbbcfccfffcf8666bbbcfffff88fffc6cfffcccccccccccc
    b333333bbbbbcccccffcccccebbbccffffff8888ccefffffffcffffcd8cbcccfffffcff88f8fff8ff88ffffff8869bcccffc666bd1db6cbddbbffbcffff8866bbbc8fffcc8ffcc6cfffcccccccccccc
    2eebb333bbbbbbbecccffcccebb3bcfffffff8f883fffcfcffccffd68dccebffffffcfff8f8ffffff888ffff88861bcccff86ccbd1dbccbdbbbccfcfcfff8666dbccfffcccffccbcfffccccccccccbb
    eeee2233333bbbbbbbcccccccbb3ccffffff888882effcfeffcbc96cdcccbecfffcfffff8f88fffff888ffff88691bccccfc6ccbdddbccbbb6cccfffcfff8d99dbbc8ffc68fffccc8fcccccccbbbbbb
    eeeee22ebbbbbbbbbbbbeccccbb3bcfffff888888eeffcecfcfccccbbfccbbefffffcfff8f888fffffffffff86911bccccccbbcbdddb6cbbcccccffccfffc666ddbc8ffccc8fccbccfcccccbbbbbbbb
    feeeeeeeebbbb33333bbbbeccb33bcffffff88cccceffeefffffffcbfccccbecffffcff88f888ffff88ff8ff86111bcccccbbbcbd1db6ccc8ffffcffcfff68966dbccfcccccccbbccffccccbbddbbbb
    ffceeeeeebb3d333333bbbbbbb33bcfffffff888fcefeecfcfcfcfbccccccccfffffcffffffffffff888f8f889111bcccccbbbcbdddbc88ffffffccfcffff8666dbc8ffcccccccccccfccccbbddbbbb
    fffffffeeb3dd333bbbbbbbbbb33ccfff888888888becfcfcfccccd3bccffccfffffcfffffffffffff8ff8ff69111bcccccbbbbbddbccffffffffcccfffcf86666bc8ffccccffcccccffccccbddbbbb
    ffffffffcb3333beeecccccceb33bcff88888888883fcfbcfcfcdcdddbccffefffffcffffffffffffffff8886911dbcccccbdbbbbbcccccfffffccccfffcff8966bc8fcccccfffcc6cffccccbdddbbd
    feffffffcb333be2eeeecccceb33bcf8888886666befcfcffcffccdddbccdccfffffcffffffffffff668f8f8699ddbccccbbddbbbccbbbccccccccbbcfccfffff66ccfccbccfff8c6cffcccbbdddbbd
    e2effffccb31d33333beeeeebb33bc888888886dbecccffcffffcb3dd3bcbbefffcfbfffffffffff668668f8869ddbcccbddddbbbbbddbcccccccbbbbffbffffff6bcfccbbc8fffccccfccbbddddbbd
    22effffccb31111dd333333bbb33bcf88888cbbefffbfcffffcfcbddddbeeeecffffcffffffffff888888fff866bbbbbbd111ddbbddbbbcccccccbbbcfffcfff6666cfccbbccfffccccfccbbbdddbbb
    22effffccb3d1dddddddd333333bbcccfffc3eeffecfbfcfcffccbdddd3eeffcffccbffff8ffffff88888ff8666bbbbbbd11999dddbcbceecccccbbb6fffcfff8689cfccbbccfff8cccfccbbbdddbbb
    22ecfeeeeebbbbbbbb3333333333beecfffeeffffccfffcccbbbbbddddbeeffffffcbccc688fffff68666ff8869ccbbdbbbdbb6bbbccccbeeccccbb688fffcff8686c8ccbbccfffcbccfccccbdddbbb
    22eeee22222eeccccccccccbbbbbbbeccffbfbedccccfffffcccbbbbbbbeeffffffccccfff88ffff66666fff869bbbdddbbbbccccccccbbeeccccb68fffffccf8966c88cbbbcf8ccbccfccccbbddbbb
    22eee4222222effffff888ccccebbbeccffeebbffccccfffffcccbbcbbbeeffffffcccc88f8fffff68666fff869bbbbd3bbbbccfccbbbbbeeecccb68ffffffccf6668ffcbbbcfccbbccfcccccbbbbcc
    22eee2222222efffff888cccccccbbbecfeefffffccccfffffccbbbccccbefffffccbccc8f8fffff668668ff869bbb333bbbbcffcccbdbbeeeccc68fff8ffffccc668ffccbccfccbbccfcccccbbbccf
    22eeeb222222ecffff886bbeccccbbbbcfffffcccfccfffffccbddbbbbbbefffffccccc888888ffffff888ffff66bbbbbcbdbcfcccccbbeeeeccc6f8f66ff8fffcb68fffcccfff8ccccfcccccccccff
    22eeeb333334eeccccc86bbbcccccb3bcfffff8cc888ccccccbbdddbbb3eeeffffffffffffffffff668886fff8696bbccccbbcfcccccbbcceec6968fb1dbcffffff6c8ff88ffffffcccffccccccccff
    222ee3333333eeeeeec66bbeccccbb3bc8ffff8888888ccbccbbdddbd3efffffcfffffffffffffffffff8ffff8869ccccccbbcfcccccbbccccc668fbdddbbcff86f668ff88ffffffcccfcccccccccff
    222ee333333342222eebbbbeccceb33bccffff8888888cccccbbddbb32eeffefbccfcffffff8ff8fffff88ffff8666cccccbbc88ccccbbccccbbccbcbddbbdcf8f6968ffffffffffcccfccccbbcccff
    222ee3333333422222eb33beccccbb33bcffff8888888cccccbdddbb3eeefeefcccffffffff8ff88fffff8ffff8869cccccbbccccccbbbbbbbbdbbbcbddbbbdf886668ffffffffffcccfccccbbcccff
    222ee3333333422222eb333beccccb33ccfff88888888ccccbdddbbb2eefcecfcccffffffffffff888f8ff88fff889bcccbddbcccbbbbbbdbbbbbbbcbdddbbd6f868688fffffffffcccfccccccccccf
    222ee3333333422222eb33333beceb3dbcff8888886cccccbbdddbb32eefeecfccccffff8fffff8ff88fff888ff8861cccbddbbbbbbbbddddbbdddbcbddbbbd68f86888fffffffffcccffcccccccc8f
    e22ee3333333422222b3333333bbb333ccff8888888cccbbbddddbc3eeffeecfcbffffff888f888ff88fff886fff8816ccbdddbbbbbdddd1ddddddbccd1dbdd8f88b8fffffffffffcccffcccccccc8f
    e2eee3333333222222b33333bbbbb33dbcff88888888ccbbdddbbb32efffeefcbccfffcff88ff8fff88ffff86fff8891ccbdddbbbbbd1111ddd111dbbd1dbd1bf8f68ffffffff8ffcccffcccccccc8f
    e2eee4333333222222b333bbeebbb33bccf88888888886bbdddbbb3eeffeeefccffffffffffffffff88fffff68ff88699cbdddbbbbbd111ddbbd11dbbd1dbd1dfff6cfffffff888fcccffcccccccc8f
    e2eee3333333222222eb3bbeccccbb3db8888886666666bbdddbb3eeffeeecffccffffffff88fffff8ffffff68fff8881cbdddbbddbd11dbbbbbdddbbd1dbbd1ddf8ccffffff888fcccffcccccccc8f
    eeeee3333333222222b333bbeeccbb3bc8888886666666bbdddd32eeffeeeeffcfffffffff88ffffffffffff88fff88869bbbbbbbbbd11dddddddddbbd1dbbd1dbbcccfffffff8f8cbcffcccccccccf
    eeeee33233332222223333333bbbb333bc88888886666ccbdddd2eeeffeffeffcffffff8ff88ffff8fffffff88fffff8866bbbccebbbd11111d111dbcd1dcbd1dbbbccfff8fff88cbbcffcbbbbbb6cf
    eeeee42232342ee22233dd11dd33333bccf88888ccccccccb3d12e2ffffffefcfffffffffff8fff88ffffffffffffff8f89bbccccccbdd111d1111dbcd1dbbd1dbbcccfffffff88cbbcf8cbbbbbb68f
    feeee222233422eeeeb33dddddddddddbcfffffffffcccccbb1b2e2ffffffefcfffffffffff88ff88ffffffffffff8fff866bccccbbbbdddddddddbbcd1dbbd1dbbcccfffffff8fccbccfcbccccccff
    feeee2223334222eeee333bbbb3dddd3ccffffffffffcccccb32e2eeffefcecfffffffffffff8ff88ffffffffffff8ffff696ccbbbbbbdddddddddbbcd1dbb11dbbcccffffffffffcbccfcc8f8fffff
    feeee4233334222eeee43eecccccbbbbcfffffffffffceccc322e2eeceececffffffffffffff8ff8fffffffffffff88ff8699cccbbbbdd111d11dddbcd1dbb11dbb6ccfff88fffff8cccfccfffffffc
    feeee4333334222eeee34ecffccccccccfffffffccfccecc32eee2eeeeecccffffffffffffffff88ffffff8ffff8888f886696ccbbbbd111111111dbbdddbb11db66ccfff88ffffffcccfccfffffffc
    feeee3333334222eeee3becfccebbccccfffffceeeeecccb22e2ee2eeeecbffffffffffffffff8888fffff8ffff888ff8f666cccbbbbd1111dd111dbcbddbb11d666ccfff88fffff8cccfccfffffff8
    feeee44333342222eeb332eecebbbccccffffceeeeeecfe322e3ee2efcccffffffffffffffffff8fffff88ffffff88ff886866ccbbbbdddddddddddbcbddbb11d666ccfff88fffff8cccfcc8ffffff8
    feeee22222322222eeb3322eebbbbccccffffceeebeeff322eeffe22eccfffffffffffffffffff8ffffffffffff88888868f66cccbbbd111111111dbcbddbbd1db6bccfff88fffff86ccfcc8ffffff8
    feeee2222234222eecb33222ab33bccccffffcceeeeecdbbbbbbffffcfffffffffffffcffffffffffffff8ffff88888868ff896bbbbbdd11111111dbcbddbbd1dbb6ccfff88fffff86ccfcc8fffffff
    feeee22223342eeeecb333222333bcccccffffffccec99999997cffcfffffffffffffc96ffffc67cffffffff868888888ffff69bbbbbbdddddd1dddbcbd1dd11dbb66cfff88fffff8868f888fffffff
    feeee42243342222eeb333223333bcceecfffffffffbb99999999effffffffffffffc999cfff7997fffffff886688668fffff89bbbbbbcbbbbbbb666cbd1dd11d666c8ffff8ffffff868f888fffffff
    feeee4433334ee2eecb333223333bcceecfffffffff2eb9bbcb99bffffffffffffffc9997ff69997fffff88f88888888ffffff66ccbbcccbbbbd9666cbd1b6d1dbb668fffffffffff866888ffffffff
    feeee444333e2eeeecb33422333dbccecfffffffff22e79bf2b997ffffffffffffffc99996c99997fffffffffffffff86688ff8966bbccccbb6d968886d966d1dddb68fffffffffff86666688ffffff
    fceee24433322eeeeccb322b33ddbcceefffffffff22e99be2c996fffffffffffff8699999999997ffffffffffffff8f6868ff866bbbbccbbbb9966886d96691dbb668fff8cc88fff86666668888fff
    fceee223333eeeeeeccb322b33ddbcceeffffffff222b99bbb999cfffffffffff888699799997997888ffffffffff88866668ff89bbbbc66666b666686996691d66688fffccc88ffff8666668886c8f
    feee2233333eeeeeeccbb2eb3dddbccccfffffffc22e9999999997ffffffffffff88699679996997888ffffcfffff88886668ff86bbbb6bd999966668669b699966688fff86688fff8868888886666c
    feee223333beffffcccbb2eb3dddbccccffffeee22eeb999999999cc6cf67fffffff799669966997c6997669997cf679766866f866bbbb99999966668869969996668ffff88888fff866688ff8866cc
    feee223333becffffceb22eb3d33bccccfffcee22ee2b99bcffc99799cc97cffffff799686686997799999799997c999968668ff89bb6666666666668866666996668ffff88688fff88688fffff88fc
    feee22333332eeeefceb22eb3333bccccffffee3eeeeb99bfffc79999cc99c888f88699688886999996c99797797797c68f8888f86666866666888888886686699668ffff88888ffff868fffffffffc
    feee22233332222ecccc22eb3333bccecffffe3b3defc996fffc797797697c888888699688886999996c99997ffc796fff8669966669888888888ffff888888699968ffff8888fffff888fffffffffc
    feee22233332222ecccc22eb333bbccecffcb2233b3ec997766799cc99999cff8888699688886999996c99997fff797fff8866666699688ffffffffffff88f8866668fffff888fffff868fffffffff8
    feee22233322e22eeccc22eb333bcccccee32ee223dbd999999997ff699996ffff88699688886999799999997fffc9997c111b6666666ffffffffffffffffff88888ffffff888fffff86888fffffff8
    feee22233322ee2ecccc22eb333bcccec332efeeee22b9779977cfffcc799cfffff86666888869766799769966fffc799611d666666668ffffffff8888ffff8888ffffffff888fffff888888ffffff8
    ffee2223332eeeeefccc222b3333bccec32effef22eeeeceefffffff69997ffff88888888888888888888866666fffffffb88886668866ffff8888888888888888ffffffff888ffffff888888888ff8
    ffee2223332eeccffccc222b33dbcccec22eff2fe2eeeecffffffcff6997cfff8888888888888888888888666668ffffffcffc88666886888888866666668888888fffffff888ffffffffff88888888
    ffee222333eeecfffccc22ebb3d3bccee222ff2feeeeeeffffffccffccc8fff888888888888888888888866666668fffffff8bf8886ff668888666666666688888fffffffff88fffffffffff8888688
    ffee222333eeccfffcceeeeeb333bcceee2eff2feeeeecfffffccccfffff888888888888888888888888866666686fffffff8bf8888f88688866666666888888888ffffffff8ffffffffffffff88866
    ffee223333eecfffffccceeebb33ecceedeeff2ffeefecfffffccccccccccccc888888888888888888888666666668ffffff8bff888f8866686666668888fff88888ffffffffffffffffffffffff888
    ffee222333ecfffffffcceeebbbbcccee32effeffeffefeffffcccccbbbbbbccccc8888888888888888886666666668ffffffcff8fffff688888666888888fff88888ffffffffffffff8ffffffffff8
    `)
game.splash("press A")
mySprite = sprites.create(assets.image`Ninja`, SpriteKind.Player)
info.setLife(3)
controller.moveSprite(mySprite, 100, 100)
projectile = sprites.createProjectileFromSide(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . c c . . . . . . . . 
    . . . . c a f b c . . . . . . . 
    . . . . b f f b c c . . . . . . 
    . . . a a f b a b a c . . . . . 
    . . . c a c b b f f b . . . . . 
    . . . . b f f b f a b . . . . . 
    . . . . a f f b b b a . . . . . 
    . . . . . a b b c c . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, randint(-50, 50), randint(-50, 50))
mySprite.setStayInScreen(true)
projectile.setBounceOnWall(true)
info.setScore(0)
game.onUpdate(function () {
    if (info.score() < 15) {
        scene.setBackgroundImage(assets.image`MJ`)
    }
    if (info.score() >= 15) {
        scene.setBackgroundImage(img`
            ffffffffffffffffffffffffffffffffffffff888ffcfccccfffffffcbbcffffffffffffffffffffffffffffffbfddcfffffffffffffffffffffffffffffffffffcbfccffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffff8888888888ffcccccfffffcccccffffffffffffffffffffffffffffffccccccffffffffffffffffffffffffffffffffffffcbcccccccccffffffcfcffffffff
            ffffffffffffffffffffffffffffff888888888886f8cccc8fff8fccbcffffffffffffffffffffffffffffffccfccccffffffffffffffffffffffffffffffffffffccccccccccccccfffcfcffffffff
            fffffffffffffffffffffffffffff888888888888c8fcc8888ffffcccfffffffffffffffffffffffffffffffffcbfffffffffffffffffffffffffffffffffffffccfccccccccccccccfffffffffffff
            fffffffffffffffffffffffffff8888888888888bcffcc68ffff8cbbbfffffffffffffffffffffffffffffffffffffffffffffffcffffffffffffffffffffffffbfcccccccccccccccccfffffffffff
            fffffcffffffffffffffffffff88888888888886dccfccc8ffffc6bdccffffffffffffffffffffffffffffffffffffffffffffffcffffffffffffffffffffffcfcfcfcccccccccccccccccfffffffff
            fffff8fffffffffffffffffff8888888886668666bbcfc88fff869dcfcffffffffffffffffffffffffffffffffffffffffffffffccfffffffffffffffffccfccccbcccccccccccccbccccccffffffff
            ffffffffffffffffffffffff888888888866686866bcffffff8fcdbfcbffffffffffffffffffffffffffffffffffffffffcfffffbcfffffffffffffffffccffcccbfccccccccccccccccccccfffffff
            fffffffffffffffffffffff8888888888888888c66c68fffffcbbbfffcbffffffffffffffffffffffffffffffffffffcffffffffffffffffffffffffccfccccfcbbbccccccccccccccccccccccfffff
            ffffffffffffffffffffff888888888888888cfc66cc88888ccbbcffffcfffffffffffffffffcbffffffffffffffffffcffffffffcfffffffcfcffffcccfccbccc1dfccccccccccccccccccccccffff
            ffffffffffffffffffffff888888888888886cfc6cc88f8886bbcffffffffffffffffffffccfcbffffffffffffffffffccfffffffcfffffcffffcccffcffcfffccddccccccccbcccccccccccccccfff
            fffffffffffffffffffff888888888888888cffc6cc888ff66ddfffffffffffffffffffffcffbbffffffffffffffffffccccfffffcffffffffffffccffccbcffccb1bcccccccb1bccccccccccccccff
            ffffffffffffffffffff88888888888888866ffc868f8ffc6bdffffffffffffffffffffffffcbcfffffffffffffffffffffcfffffccfffffffbfffcccbdccccffcbddccbbbcccbccccccccccccccccf
            fffffffffffffffffff888888888888888866cff8c888f8cbbcffffffffffffffffffffffffffffffffffffffffffffffffcfffffccccffffffffcccfcccccccfccbdbbbbbccccccccccccc1bcccccc
            ffffffffffffffffffff88888888888888866bcfccff88ccbbfcffff8ffffffffffffffffffffffcffffffffffffffffffffffffccbfffffffffffffcbfccbcccbcddbbb1bcccccccccccccbccccccc
            ffffffffffffffff8cc888888888888888fb668cc88f8ccbbbccffcff8ffffffffffffffffcffffccfffffffffffffffffffffffffffffffffcfffcfcdcbbccbfcfddbbbbbcccccccccccccbccccccc
            ffffffffffffff8ffff888888888888888f66668fff88cbbb8ccccccff8cffffffffffffffffffffffffffffffffffffcfffffffccfffffffffffcbbbdbbbddcccbbdbbbbbbcccccccccccccccccccc
            fffffffffffffffffff88888686888866f8666888ff886d6fffcccc6cf8fffffffffffffffffffcfcffffffffffffffffffffffffccfffffffffccbcbcccbdddcbbddbdbbbbcccccccccccccccccccc
            ffffffffffffff8fff888886686686666c666cc88888cbd8fffccc666c88fffffffffffffffccfffffffffffffffffffffffffffffcffffffffffcbdbbdbcdbdcbdcbbbbbbbbbcbcccccccccccccccc
            fffffffffffff86fff888899888886668fc66c8c8f8cbdffffffffccccffffffffffffffffffcffffffffffffffffffffffffffffffffffffffffcdffbbdd1cccddfcbbbbbbbdbddccccccccccccccc
            ffffffffffffffffff888866888688b6ffc6cc8ff866dcffffffffffffffffffffffffffffffffffccfffffffffffffffcffffffffffffffffffcfbcccbbbdcddbcccbb1dbbbbbddccccccccccccccc
            ffffffffffffff88ff88888888868866bccc88888c6dbff88ffffffffffffffffffffffffffffffcfffffcfffffffffffffffffffffffffffffffcccccccbbbdcbcccbbbbbbbbbccccccccccccccccc
            ffffffffffffffffff8888888888886d96c8c8ff86ddcff8fffffffffffffffffffffffffffffff88cfffcfffffffffffcfffffffffffffffffffcccbbccbdbdbccccbbbbbbbbbccccccccccccccccc
            ffffffffffffff6ff888888888888fbb96cfff8866bbffffffffffffffffffffcfffffffffffffffffffccfffffffffc6cffffffffffffffffcffcdccbddbbdddbcdbbbbbbbbbbccccccccccccccccc
            fffffffffffffffff8888888888688666688fff86bbffffffffffffffffffffffffffffffffffffffffffcfffffffffccccfffcffffffffffffffffccbdddbbddbb1dbbbddbbbbccccccccccccccccc
            ffffff8ffffffffff88888888886fc686c8888cc6cfffffffffffffffffffffffcfffffffffcfffffffffffffffffffcccffff6ccfffffffcffffffbcbdbdcbdddbdbbbbbdbbbbccccccccccccccccc
            ffffff8ffffffffff88888888868fc668888f886dcfffffffffffffffffffffffcf6fffffffffffffffffffffffffff66ffffccffffffffffffffcbccbcdbbbbdbcbbbbbbbdbbbccccccccccccccccc
            fffffffff88fcfffff888888866ffcc888fffcc6cffffffffffffffffffffffffffffffffffffffffffffffffffffffc6cffff6fffffffffffbfcccfccfdcbcbbdddbbbbbbbbbbccccccccccccccccc
            fffffffff8ffffffff888888866bcc8888ffc86bcffffffffffffffffffffffffffffffffffffffffccfffffffffffffbcfffc8ffffffffffcfffcfdccfcddbdddb11dbbbddbbbbbccccccccccccccc
            fffffffffffffffffff888888c6b6cf88ff8c6dcffffffffffffffffffffffffffffffffffffffffffcfccccccffffffcffffffffffffffffffffcfbcbcd1111111dbbbbbbdbbbddbcccccccccccccc
            fffffffffffffffffffff888fc666cfcfff8666ffffffffffffffffffffffffffffffff6fffffffffffffffffffffffcccffffcfcffffffffcfcffcfbdd1111d111bbbbbbbbbbbbbccccccccccccccc
            fffffffffffffffffffffcfcfc6cc88fff8866ffffffffffffffffffffffffffffffffffcfffffffffffffffffffccffffffccc6cffffffffffcfccbcd11111111b6666bbbbbccccccccccccccccccc
            ffffffffbffffffffff8ffcffcccc88f88cc6cfffffffffffffffffffffffffffccfffffcc8fffffffffffffffffffccfcff6cfccfffffcffffffbcdb11111111db66666bbb6ccccccccccccccccccc
            fffffffcffbffffffff8fccff668888ffccccfffffffffffffffffffffffffffff8cfffffcccfcffffffffffffffc866cccfccfc6ccffccccffffccdbd111111ddb666666b9bbcccccccccccccccccc
            fffffff6cccfffffffffcbcffcc88fff8c8cfffffffffffffffffffffffffffffffcfffffffffc8cffffffffffff8c66ccfffbc6cccff696fbfbbbbdb11111d99d666666ddb6ccccccccccccccccccc
            fffffffffffffffffffffcccfff8fff88cccffffffffffffffffffffffffffffff8ccfffffffff8cff888cbfcfffff868666cfdd9ccff66ccb91ccdb11111d96666666666666ccccccccccccccccccc
            fffffffffffffffffffffcbbcfcfff8c86cfffffffffffffffffffffffffffffff8888fcffffffffff8ccc866c8ccffff86bddcdd111116cdd1dbd1111119996666666666666cccc66ccccccccccccc
            ffffffbffffffffffffffcbccfffff888cfffffffffffffffffffffffffffffffff888cffffffffcfff8cccccc666ccbbcffccb1d111111d1111111111d999966666666666666ccc66ccccccccccccc
            ffffffdfffffffffffbfcbcccfffffffffffffffffffffffffffffffffffffffff888ccffffffffffcccccc8c8666966cccddcfccd1db1111d111111199666966666666666666cccccccccccccccccc
            fffffbffffffffffffcffccc8ffffffcfffffffffffffffffffffffff8ffffffffc8888ffffffffff888c88866c99966ccccccb1dcfb1db11111111199966696666666666666666cccccccccccccccf
            fffffcfffffffffffcfffccffffffff8fffffffffffffffffffffffff888fffffc88fffffffffffff8c888866666666cccccccccccbddbd1bbdddd19999669966669666666666666ccccccccccccccc
            fffffffffffffffffccffcffffffff8fffffffffffffffffffffffffc88c8ffffc88fffffcfffffff8c88886666666666cc6cccccccc69d1ddbc6b99999999966669666666666666ccccccccccccccf
            ffffffffcffffffccfcffffffffffccffffffffffffffffffffffffffc866ffff8cc8fffffffffffffcc8666666666666666cccccccc6669911d19999999999966666666666666666cccccccccccccf
            ccffcffffffffffdffbcfffffffffcfffffffffffffffffffffffffffc666cfffcccccffffffffffffffc866666666666c6cccccfffffc691119999999999996666666666666666666ccccccccccccf
            ccffffffffffffcbfcccffffffffccffffffffffffffffffffffffffcfc666fffcccccffffffffffffffffcc66666666ccccfffffffffc6111999999999999666666966666666666666cccccccccccf
            bffffffffffffcbcffffffffffffc6ffffffffffffffffffffffffffccfc66cffc6cccfffffffffffffffffff8ccccfccffffffffffffc6119999999999999666669996666666666666cccccccccccf
            bffcfffffffffccffffffffffffccbfffffffffffffffffffffffffff6ff966fffc6c8ffffffffffffffffffffffffffffffffffffffffc919999999999999666661666666666666666cccccccccccf
            cffffffffffffcffffffffffffccfffffffffffffffffffffffffffff66fc69fffccc8ffffffffffffffffffffffffffffffffffffffffc999999999999996666666666666666666666cccccccccccf
            cfffffffffffffffffffffffffcffffcffffffffffffffffffffffffff668666fffcccffffffffffffffffffffffffffffffffffffffffc699999999999996669966666696666666666cccccccccccf
            fffffffffffffffffffffffffccffffffffffffffffffffcffffffffffcc6866cffcccffffffffffffffffffffffffffffffffffffffffc6999999999999966699666666666666666666ccccccccccf
            ffffffffffffffffffffffffff8fcfcfcffffffffffffffcffffffffffffffc66ffc88ffffffffffffffffffffffffffffffffccfffcfcc6999999999999966666666666666666666666ccccccccccf
            ffffffffffffffffffffffffff88ff8c8cffffffffffffffffffffffffffffc66cffccffffffffffffcffffffffffffffffffffffffffcc69999999999999666666666666666666666666cccccccccf
            ffffcfffffffffffffffffffffffff8cccffffffffffffffffffffffffffffffc6ffccffffffffffffffffffffffffffffffffffffffccc69999999999999666666666666666666666666cccccccccf
            fffffffffffffffffffffffffffffc8cc6cffffffffffffffffffffffffffffffccfcc8fffffffffffffffffffffffffffffffffffffcc669999999999999666666666619666666666666cccccccccf
            fffcffffffffffffffffffffff8866ccfccffffffffffffffcfffffffffffcfffffff88ffffffffffffffffffccffffffffffffffffccc6999999999999999666666666666666666666666ccccccccc
            ffffffffffffffffffffffffff866cf8ffcffffffffffffffffffffffffffffffffffcccffffffffffffffffffffffffffffffffffcccc6999999999999999666666666666696666666666ccccccccc
            cffffffffffffffffffffffff8ffff8cfccfffffffffffffffffffffffffffffcfffff88ffffffffffffffffffcffffcfffcfccc6bbdb69999999999999996666666666666699666666666ccccccccc
            cfffcfffffffffcffffffff88cffff8cfcffffffffffffffffffffffffffffffffffff868ffffffffffffffffffffffccffcfb6cd911999999999999999996666666666666666666666666ccccccccc
            cffffffffffffcffffffffcc8ccfffffccfffffffffffffffffcfffffffffffffff6fff66ffffffffffffffffccfffcffccbcc911111999999999999999996666666666666666666666666ccccccccc
            cffffffffffffffffffffffffccffcccccfffffffffffffffffffffffcffffffffffcfff6cffffffffffffffffffffffffffc6dddd19999999999999999996666666966666966666666666ccccccccc
            cffffccffffcffffffffffffffffcc6ccffffffffffffffffffffffffffffffffffffffff6fffffffffffffffcffffffffffc6991199999999999999999996666669966666966666666666ccccccccc
            cffffcccfffcffffffffffcfffccfcccffffffffffffffffffffffffffffffffffffffffffcfffffffffffffffffccfffffcc6d11999999999999999999966666666669d66666666666666ccccccccc
            ffffffccfffffffffff6fcff6fccfccffffffffffffffffffffffffffffffffffffffffcffffffffffffffffffffffffc66b99111999999999999999999996666666666666666666666666ccccccccc
            ffffffcfcfffffffffffffffcfcfcfffffffffffffffffffffffffffffffffffffffffffcfffffcfffffffffffcffffc6b169d119999999999999999999996666666666666666666666666ccccccccc
            ffffffffffffffffffcffffcfcfffffffffffffffffffffffffffffffffffffffffffffffcffffffffffffffffffccccc6bbd1119999999999999999999996666666666666666666666666ccccccccc
            ffffffffffffffffff8ccfffcfffcffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccc9d1111999999999999999999999666666666666666666666666cccccccccc
            ffffffffffccfffffffffffffffdffffffffffffffffffffffffffffffffffffffffffffff8ffffffccfffffffffffccfc66111c9999999999999999999966666666666666dd666666666cccccccccc
            ffffffccffffff6cfffffffffcbffffffffffffffffffffffffffffffffffffffffffffffffcfffffffcfffffffffffcccc6d1dfb999999999999999999966666666666666dd666666666cccccccccf
            ffffffffffffff6cfffffffffcfffffffffffffffffffffffffffffffcffffffffffffffffffcfffffffccfffffcffcccc6b11ffb9999999999919999999666666666d966666666666666cccccccccf
            fffffffffffffffffffcfffcffffffffffffffffffffffffffffffffcfcc8fffffffffffffffffffffffcccfffffffcccd9d1bcf99999999999999999996666666666996666666666666ccccccccccf
            fffffffffffffffffffffffffffffffffffcfffffffffffffffffffff6cff8ffffffff8ffffff8cfffffffcccffccfcffc61d69c99999999999999999666666666699666666666666666ccccccccccf
            fffffffffffffffffffffffffffffffffffcfffffffffffffffffffffffcffffffffffffffffff68cfffffccc6c6bbdb9d11111c999999999999999966666666669999666666661d666ccccccccccff
            fffffffffffffffffffffffffccffffffffcbcffffffffffffffffffffffffffffffffffffffffc8fcfffffffccd9bbbbbd111bf99999999999999996666666666699666666666d6666ccccccccccff
            fffffffffffffffffccffcffccffffffffffdcfffffffffffffffffffffffffffffffffffffffffccffffffffffcc66ccc9d11cf9999999999199996699666666666666666666666bbcccccccccccff
            fffffffffffffffffccfcdffcfffffffffffcdffffffffffffffffffffffffffffffffffffcfffffccffffffffffffc6999d11cf9999999999966666699666666666666666666611bbeccccccccccff
            fffffffffffffffffffcbcfcfffffffffffffbcfffffffffffffffffffffffffffffffffff8fffffc6ffffffffffffffc6ddbbc6666699999966966bbb666666666bb66bbb66bbdbce2ee2ecccccfff
            fffffffffffffffffffffffffffffffffcffccdbfffffffffffffffffffffffffffffffffffffffffc6cfffffffffffc6666bbd9666699999666b66bbb6bbc6cc6bbb66bdb6bbbbceeeceeecccccfff
            ffffffffffffffffffffffffffffffffccfcbccdffffffffffffffffffffffffffffffffffffffffccd6ccccffffffc6699dd1cd66666999666bbcbcc66bb6bccbbcc66dbc6bccbcccceeccccccffff
            fffffffffffffffffffffffffffffffbcfbbcbc1bfffffffffffffffffffffffffffffffffffffffffffccc66cfffff699dddbf66b666666d66bcbcbc6ddc6cccbbb666bb6bbdbddceeefcccccfffff
            ffffffffffffffffffffffffffffffcbcbdcffbcbffffffffffffffffffffffffffffffffffffffffffffffffcccfffc69dddcf66169b9d666bcccbc66cb6cbcbbcc66bcc6dbccccebcceeccccfffff
            fffffffffffffffffffffffffffffcccbddbbcfbbbfffffffffffffffffffffffffffffffffffffffffffffffffcccffcbbddcc6d1911d6666cbb66c6dbc6cbcbccc6bbb6bbbcbcbccccffcccccffff
            fffffffffffffffffffffffffffffbdd1111dcfcbbffffffffffffffffffffffffffffffcffffffffffffffffffcfccccc66bfcbbb6b6666666666bc666ccccccccc66cc666ccccccccefcccc69ffff
            ffffffffffffffffffffffffffffcd1111111dcfccdffffffffffffffffffffffffffcffccffffffffffffcffffffffcccc6cccb6666666666cccccbccccccccccecccecccecccccccffccccfffffff
            fffffffffffffffffffffffffffffcbbd11111dcfcbcfffffffffffffffffffffffffffcfbcfffffffffffffcffffffffcccccbd66666666d666cccccccbccccccccccfcccccccccffffcccfffcffff
            ffffffffffffffffffffffffffffffffccb1111cfffffffffffffffffffffffffffffffffcbffffffffffffffffcffffffccbbdbdb6666666666ccccccccccccccc66cccccccccfccccccccfffcffff
            ffffffffffffffffffffffffffffffffffffcccfffffffffffffffffffffffffffffffffffffffffffffffffffffffccfccfccdcbdcc6666666ccccccccccccccccccccccccccccccccccccffffffff
            ffffffffffffffffffffffffffffffffffffccffffffffffffffffffffffffffffffffffffcffffffffffffffffcffffcbcbccdcbdbcb666cc6ccccccccccccccccccccccccccccccccffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcccffffffffffffffffcfccbbddddccbccbccccccccccccccccccccccccccccccccccccffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcccccffffffffffffccccccbcbddbccbcccccccc6cccccccccccccccccccccccccccccfffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcccccfffffffffffffccbbddbdbcccbcccccccccccccccccccccccccccccccccccffffffffffffffffff
            `)
    }
})
game.onUpdateInterval(2000, function () {
    projectile = sprites.createProjectileFromSide(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . c c . . . . . . . . 
        . . . . c a f b c . . . . . . . 
        . . . . b f f b c c . . . . . . 
        . . . a a f b a b a c . . . . . 
        . . . c a c b b f f b . . . . . 
        . . . . b f f b f a b . . . . . 
        . . . . a f f b b b a . . . . . 
        . . . . . a b b c c . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, randint(-50, 50), randint(-50, 50))
    projectile.setBounceOnWall(true)
})
game.onUpdateInterval(1000, function () {
    info.changeScoreBy(1)
})
