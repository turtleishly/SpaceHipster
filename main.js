var SpaceHipster = SpaceHipster || {};

//initiate Phaser framework
SpaceHipster.game = new Phaser.Game('100%','100%',Phaser.AUTO);

SpaceHipster.game.state.add('GameState',SpaceHipster.GameState);
SpaceHipster.game.state.start('GameState')
