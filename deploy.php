<?php

namespace Deployer;

require __DIR__ . '/vendor/deployer/deployer/recipe/common.php';
require __DIR__ . '/vendor/deployer/deployer/recipe/symfony4.php';
require __DIR__ . '/vendor/emroni/deployer/recipe/symfony4.php';

host('emrekoc.io')
    ->stage('production')
    ->hostname('159.65.6.231')
    ->user('root')
    ->port(22)
    ->identityFile('~/.ssh/id_rsa')
    ->addSshOption('UserKnownHostsFile', '/dev/null')
    ->addSshOption('StrictHostKeyChecking', 'no')
    ->forwardAgent(true)
    ->multiplexing(true)
    ->set('deploy_path', '/var/www/emrekoc.io')
    ->set('branch', 'master')
    ->set('http-check', false)
    ->set('keep_releases', 2)
    ->set('repository', 'git@github.com:Emroni/website.git')
    ->set('timezone', 'Europe/Amsterdam')
    ->set('public_webroot', 'public')
    ->set('shared_dirs', [
        'build/assets',
    ]);

task('deploy:build', function () {
    within('{{release_path}}', function () {
        run('yarn install');
        run('yarn build');
    });
});

task('deploy', [
    'deploy:info',
    'deploy:prepare',
    'deploy:lock',
    'deploy:release',
    'deploy:update_code',
    'deploy:clear_paths',
    'deploy:build',
    'deploy:shared',
    'deploy:symlink',
    'deploy:unlock',
    'cleanup',
]);


after('deploy:failed', 'deploy:unlock');