var SpaceHipster = SpaceHipster || {};

//initiate Phaser framework
SpaceHipster = new Phaser.Game('200','200',Phaser.AUTO);

SpaceHipster.state.add('GameState',SpaceHipster);
SpaceHipster.state.start('GameState')
