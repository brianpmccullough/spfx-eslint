// *********************************************************** //
// These would be any overrides you would want for your        //
// organization.  These would build on to, or override, the    //
// SPFx defaults.  For example, add the no-console rule.       //
// *********************************************************** //
module.exports = {
    extends: ['./spfx'],
    overrides: [
        {
            files: ['*.ts', '*.tsx'],
            rules: {
                "no-console": 1
            }
        }
    ]
};