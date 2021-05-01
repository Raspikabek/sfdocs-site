# run

Main command to generate the documentation

`sfdx sfdocs:generate [-d <filepath>] [-r markdown|json] [-p <array>] [--json] [--loglevel trace|debug|info|warn|error|fatal|TRACE|DEBUG|INFO|WARN|ERROR|FATAL]`

```
generates documentation

USAGE
  $ sfdx sfdocs:generate [-d <filepath>] [-r markdown|json] [-p <array>] [--json] [--loglevel
  trace|debug|info|warn|error|fatal|TRACE|DEBUG|INFO|WARN|ERROR|FATAL]

OPTIONS
  -d, --outputdir=outputdir                                                         [default: docs] directory to store
                                                                                    the documentation files

  -p, --packages=packages                                                           list of package names to generate
                                                                                    documentation, leave it empty to
                                                                                    generate from all existing packages

  -r, --resultformat=(markdown|json)                                                [default: markdown] result format
                                                                                    stored in the outputdir; --json flag
                                                                                    overrides this parameter

  --json                                                                            format output as json

  --loglevel=(trace|debug|info|warn|error|fatal|TRACE|DEBUG|INFO|WARN|ERROR|FATAL)  [default: warn] logging level for
                                                                                    this command invocation

EXAMPLE
  $ sfdx sfdocs:generate --resultformat markdown --outputdir site
```
