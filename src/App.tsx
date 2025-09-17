// src/App.tsx
import { AppBar, Toolbar, Typography, Container, Box, Link, List, ListItem, ListItemText, Card, CardActionArea, CardMedia, CardContent, CardActions, Button } from "@mui/material";
import Grid from "@mui/material/Grid";

function App() {
  return (
    <Box sx={{ minHeight: "100vh", bgcolor: (theme) => theme.palette.background.default, minWidth: "100vw"}}>
      {/* Header / Nav */}
      <AppBar position="static" color="primary">
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Adam Bishop
          </Typography>
        </Toolbar>
      </AppBar>

      {/* Main Content */}
      <Container maxWidth="lg" sx={{ py: 6, mx: "auto"}}>
        {/* About Section */}
        <Box sx={{ mb: 4 }}>
          <Typography variant="h5" gutterBottom color="text.primary">
            About Me
          </Typography>
          <Typography component="p" color="text.primary">
            I’m a Full Stack Software Developer with experience in building and maintaining
            web applications, debugging complex systems, and contributing to team success
            through clean code and strong documentation. I’m passionate about learning new
            technologies and solving real-world problems.
          </Typography>
          <Box sx={{ mt: 2 }}>
            <Link href="mailto:adam.michael.bishop@gmail.com" sx={{ mr: 2 }} color="text.primary">
              Email
            </Link>
            <Link
              href="http://www.linkedin.com/in/adam-michael-bishop"
              target="_blank"
              sx={{ mr: 2 }}
              color="text.primary"
            >
              LinkedIn
            </Link>
            <Link href="https://github.com/adam-michael-bishop" target="_blank" color="text.primary">
              GitHub
            </Link>
          </Box>
        </Box>

        {/* Skills Section */}
        <Box sx={{ mb: 4 }}>
          <Typography variant="h5" gutterBottom color="text.primary">
            Technical Skills
          </Typography>
          <List>
            <ListItem>
              <ListItemText
                primary={<span style={{color:'inherit'}}>Languages</span>}
                secondary={<span style={{color:'inherit'}}>Python, Java, JavaScript, HTML, CSS, jQuery, Bootstrap</span>}
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary={<span style={{color:'inherit'}}>Frameworks & Tools</span>}
                secondary={<span style={{color:'inherit'}}>React, Spring Boot, Hibernate, REST APIs, MySQL, Git</span>}
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary={<span style={{color:'inherit'}}>Networking</span>}
                secondary={<span style={{color:'inherit'}}>CCNA Certified, Cisco Routers, Firewalls, Switches</span>}
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary={<span style={{color:'inherit'}}>Familiarity</span>}
                secondary={<span style={{color:'inherit'}}>Docker, C++, C#</span>}
              />
            </ListItem>
          </List>
        </Box>

        {/* Projects Section */}
        <Box sx={{ mb: 4 }}>
          <Typography variant="h5" gutterBottom color="text.primary">
            Projects
          </Typography>

          <Grid container spacing={2}>
            <Grid item xs={12} sm={6} md={4}>
              <Card sx={{ maxWidth: 480 }}>
                <CardActionArea
                  component="a"
                  href="https://weathermap-project.netlify.app/" /* <- edit this URL */
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Open project in new tab"
                >
                  <CardMedia
                    component="img"
                    height="200"
                    image="/path/to/preview.png" /* <- replace with your preview image path */
                    alt="Project preview"
                    loading="lazy"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h6" component="div" color="text.primary">
                      Project Title
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Short project description. Click to open live demo.
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button size="small" color="primary" href="https://github.com/your-repo" target="_blank" rel="noopener noreferrer">
                    Source
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          </Grid>
        </Box>

        {/* Experience Section */}
        <Box>
          <Typography variant="h5" gutterBottom color="text.primary">
            Experience
          </Typography>
          <Box sx={{ mb: 3 }}>
            <Typography variant="h6" color="text.primary">Outlier AI – AI Data Annotator</Typography>
            <Typography variant="body2" color="text.secondary">
              Oct 2024 – Present
            </Typography>
            <Typography color="text.primary">
              Develop coding prompts, debug AI-generated code, and refine training data.
            </Typography>
          </Box>

          <Box sx={{ mb: 3 }}>
            <Typography variant="h6" color="text.primary">LionSoft LLC – Full-Stack Developer</Typography>
            <Typography variant="body2" color="text.secondary">
              Jul 2024 – Oct 2024
            </Typography>
            <Typography color="text.primary">
              Designed and maintained full-stack apps, integrated Stripe billing,
              and implemented LLM assistant audit features.
            </Typography>
          </Box>

          <Box>
            <Typography variant="h6" color="text.primary">Cisco Meraki – Network Support Engineer</Typography>
            <Typography variant="body2" color="text.secondary">
              Jan 2017 – Jul 2017
            </Typography>
            <Typography color="text.primary">
              Resolved 750+ enterprise networking cases and contributed to firmware bug fixes.
            </Typography>
          </Box>
        </Box>
      </Container>

      {/* Footer */}
      <Box component="footer" sx={{ p: 2, textAlign: "center", bgcolor: "white" }}>
        <Typography variant="body2" color="text.primary">
          © {new Date().getFullYear()} Adam Bishop | Built with React + TypeScript + MUI
        </Typography>
      </Box>
    </Box>
  );
}

export default App;