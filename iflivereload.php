<?php


    $urlLiveReload = 'http://localhost:35729/livereload.js';


    if ($_SERVER['SERVER_ADDR'] == '127.0.0.1' || $_SERVER['HTTP_HOST'] == 'cobaia'){


        echo '<script src="' . $urlLiveReload .'" charset="utf-8"></script>';


    }
