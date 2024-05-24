import { Box, Stack, Typography } from "@mui/joy";


const FollowerSide = () => {
    return (
        <Stack spacing={2} justifyContent="space-between">
          <Box>
            <div style={{ position: 'relative', display: 'inline-block' }}>
              <Typography level="title-sm">
                <Typography
                  level="h2" fontSize="xl"
                  textColor="var(--joy-palette-success-plainColor)"
                  fontFamily="monospace"
                  style={{ position: 'absolute', top: 14, left: 20 }}
                >
                  282
                </Typography>
                Followers
              </Typography>
            </div>
          </Box>
          <Box>
            <div style={{ position: 'relative', display: 'inline-block' }}>
              <Typography level="title-sm">
                <Typography
                  level="h2" fontSize="xl"
                  textColor="var(--joy-palette-success-plainColor)"
                  fontFamily="monospace"
                  style={{ position: 'absolute', top: 14, left: 20 }}
                >
                  282
                </Typography>
                Followers
              </Typography>
            </div>
          </Box>
          <Box>
            <div style={{ position: 'relative', display: 'inline-block' }}>
              <Typography level="title-sm">
                <Typography
                  level="h2" fontSize="xl"
                  textColor="var(--joy-palette-success-plainColor)"
                  fontFamily="monospace"
                  style={{ position: 'absolute', top: 14, left: 20 }}
                >
                  282
                </Typography>
                Followers
              </Typography>
            </div>
          </Box>
        </Stack>
    )
}

export default FollowerSide;