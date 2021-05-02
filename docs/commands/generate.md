# sfdocs:generate

Main command to generate the documentation. Is required to run inside a `sfdx` project.

`sfdx sfdocs:generate [-d <filepath>] [-r markdown|json] [-p <array>] [-i <array>] [--reset] [--json] [--loglevel trace|debug|info|warn|error|fatal|TRACE|DEBUG|INFO|WARN|ERROR|FATAL]`

generates documentation

```
generates documentation

USAGE
  $ sfdx sfdocs:generate [-d <filepath>] [-r markdown|json] [-p <array>] [-i <array>] [--reset] [--json] [--loglevel
  trace|debug|info|warn|error|fatal|TRACE|DEBUG|INFO|WARN|ERROR|FATAL]

OPTIONS
  -d, --outputdir=outputdir                                                         [default: docs] directory to store
                                                                                    the documentation files

  -i, --ignoretypes=ignoretypes                                                     list of metadata type infos to
                                                                                    ignore. valid values are metadata
                                                                                    type info names or folder names
                                                                                    (CustomApplication or applications,
                                                                                    CustomObject or objects)

  -p, --packages=packages                                                           list of package names to generate
                                                                                    documentation, leave it empty to
                                                                                    generate from all existing packages

  -r, --resultformat=(markdown|json)                                                [default: markdown] result format
                                                                                    stored in the outputdir; --json flag
                                                                                    overrides this parameter

  --json                                                                            format output as json

  --loglevel=(trace|debug|info|warn|error|fatal|TRACE|DEBUG|INFO|WARN|ERROR|FATAL)  [default: warn] logging level for
                                                                                    this command invocation

  --reset                                                                           remove existing target docs folder

EXAMPLE
  $ sfdx sfdocs:generate --resultformat markdown --outputdir site
```

## options

### -d, --outputdir=outputdir

_default:_ docs

target directory to store the documentation files.

### -i, --ignoretypes=ignoretypes

list of metadata type infos to ignore. valid values are metadata type info names or folder names (CustomApplication or applications, CustomObject or objects)

### -p, --packages=packages

list of package names to generate documentation, leave it empty to generate from all existing packages

### -r, --resultformat=(markdown|json)

_default:_ markdown


result format stored in the `--outputdir`. `--json` flag overrides this parameter

### --json 

format output as json

### --loglevel=(trace|debug|info|warn|error|fatal|TRACE|DEBUG|INFO|WARN|ERROR|FATAL)

_default:_ warn

logging level for this command invocation

### --reset

remove existing target docs folder. Any existing manual changes or additional items will be deleted. The entire `--outputdir` folder; if exists, will be deleted before the generate command starts to process the project.
