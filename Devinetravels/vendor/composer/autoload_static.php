<?php

// autoload_static.php @generated by Composer

namespace Composer\Autoload;

class ComposerStaticInit7e775fa2eacc20956ac8515480d2f68b
{
    public static $prefixLengthsPsr4 = array (
        'C' => 
        array (
            'C5384132\\Devinetravels\\' => 23,
        ),
    );

    public static $prefixDirsPsr4 = array (
        'C5384132\\Devinetravels\\' => 
        array (
            0 => __DIR__ . '/../..' . '/src',
        ),
    );

    public static $classMap = array (
        'Composer\\InstalledVersions' => __DIR__ . '/..' . '/composer/InstalledVersions.php',
    );

    public static function getInitializer(ClassLoader $loader)
    {
        return \Closure::bind(function () use ($loader) {
            $loader->prefixLengthsPsr4 = ComposerStaticInit7e775fa2eacc20956ac8515480d2f68b::$prefixLengthsPsr4;
            $loader->prefixDirsPsr4 = ComposerStaticInit7e775fa2eacc20956ac8515480d2f68b::$prefixDirsPsr4;
            $loader->classMap = ComposerStaticInit7e775fa2eacc20956ac8515480d2f68b::$classMap;

        }, null, ClassLoader::class);
    }
}
