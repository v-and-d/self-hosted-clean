const { exec } = require('child_process');

exec('cd ../../ && rm -Rf $REPO_NAME _PipelineMapping _temp _tool _actions',
    function (error, stdout, stderr) {
        console.log('stdout: ' + stdout);
        console.log('stderr: ' + stderr);
        if (error) {
             console.log('exec error: ' + error);
        }
    });
