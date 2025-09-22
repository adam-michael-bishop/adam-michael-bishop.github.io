// src/App.tsx
import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  Box,
  Link,
  List,
  ListItem,
  ListItemText,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  CardActions,
  Button,
  IconButton,
} from "@mui/material";
import Grid from "@mui/material/Grid";

function App() {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        bgcolor: (theme) => theme.palette.background.default,
        minWidth: "100vw",
      }}
    >
      {/* Header / Nav */}
      <AppBar position="sticky" color="primary">
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Adam Bishop
          </Typography>
          <Button
            color="inherit"
            onClick={() => {
              document
                .getElementById("about")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            About
          </Button>
          <Button
            color="inherit"
            onClick={() => {
              document
                .getElementById("projects")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Projects
          </Button>
          <Button
            color="inherit"
            onClick={() => {
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Contact
          </Button>
          <IconButton
            color="inherit"
            component="a"
            href="https://github.com/adam-michael-bishop"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub profile"
            sx={{ ml: 1 }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.387.6.112.82-.262.82-.582 0-.287-.01-1.047-.016-2.055-3.338.726-4.042-1.61-4.042-1.61-.546-1.387-1.334-1.758-1.334-1.758-1.09-.745.082-.73.082-.73 1.205.085 1.84 1.237 1.84 1.237 1.07 1.833 2.807 1.303 3.49.996.108-.776.418-1.303.76-1.603-2.665-.303-5.466-1.333-5.466-5.93 0-1.31.468-2.38 1.236-3.22-.124-.303-.536-1.523.116-3.176 0 0 1.008-.322 3.3 1.23a11.5 11.5 0 0 1 3.003-.403c1.02.005 2.047.138 3.003.403 2.29-1.552 3.297-1.23 3.297-1.23.654 1.653.242 2.873.118 3.176.77.84 1.235 1.91 1.235 3.22 0 4.61-2.807 5.624-5.48 5.92.43.372.814 1.102.814 2.222 0 1.604-.015 2.896-.015 3.292 0 .322.216.7.826.58C20.565 21.796 24 17.3 24 12 24 5.37 18.63 0 12 0z" />
            </svg>
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Main Content */}
      <Container maxWidth="lg" sx={{ py: 6, mx: "auto" }}>
        {/* About Section */}
        <Box id="about" sx={{ mb: 4, scrollMarginTop: 80 }}>
          <Typography variant="h5" gutterBottom color="text.primary">
            About Me
          </Typography>
          <Typography component="p" color="text.primary">
            I’m a Full Stack Software Developer with experience in building and
            maintaining web applications, debugging complex systems, and
            contributing to team success through clean code and strong
            documentation. I’m passionate about learning new technologies and
            solving real-world problems.
          </Typography>
        </Box>

        {/* Skills Section */}
        <Box sx={{ mb: 4 }}>
          <Typography variant="h5" gutterBottom color="text.primary">
            Technical Skills
          </Typography>
          <List>
            <ListItem>
              <ListItemText
                primary={<span style={{ color: "inherit" }}>Languages</span>}
                secondary={
                  <span style={{ color: "inherit" }}>
                    Python, Java, JavaScript, HTML, CSS, jQuery, Bootstrap
                  </span>
                }
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary={
                  <span style={{ color: "inherit" }}>Frameworks & Tools</span>
                }
                secondary={
                  <span style={{ color: "inherit" }}>
                    React, Spring Boot, Hibernate, REST APIs, MySQL, Git
                  </span>
                }
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary={<span style={{ color: "inherit" }}>Networking</span>}
                secondary={
                  <span style={{ color: "inherit" }}>
                    CCNA Certified, Cisco Routers, Firewalls, Switches
                  </span>
                }
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary={<span style={{ color: "inherit" }}>Familiarity</span>}
                secondary={
                  <span style={{ color: "inherit" }}>Docker, C++, C#</span>
                }
              />
            </ListItem>
          </List>
        </Box>

        {/* Projects Section */}
        <Box id="projects" sx={{ mb: 4, scrollMarginTop: 80 }}>
          <Typography variant="h5" gutterBottom color="text.primary">
            Projects
          </Typography>

          <Grid container spacing={2}>
            <Grid size={{ xs: 12, sm: 6, md: 4 }}>
              <Card sx={{ maxWidth: 480 }}>
                <CardActionArea
                  component="a"
                  href="https://weathermap-project.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Open project in new tab"
                >
                  <CardMedia
                    component="img"
                    height="200"
                    image="/path/to/preview.png"
                    alt="Project preview"
                    loading="lazy"
                  />
                  <CardContent>
                    <Typography
                      gutterBottom
                      variant="h6"
                      component="div"
                      color="text.primary"
                    >
                      WeatherMap
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                       WeatherMap is an interactive web app that uses Mapbox and OpenWeather APIs to display a 5-day weather forecast for any location on the map.
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button
                    size="small"
                    color="primary"
                    href="https://github.com/adam-michael-bishop/weathermap-project"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Source Code
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          </Grid>
        </Box>

        {/* Experience Section */}
        <Box sx={{ scrollMarginTop: 80 }}>
          <Typography variant="h5" gutterBottom color="text.primary">
            Experience
          </Typography>
          <Box sx={{ mb: 3 }}>
            <Typography variant="h6" color="text.primary">
              Outlier AI – AI Data Annotator
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Oct 2024 – Present
            </Typography>
            <Typography color="text.primary">
              Develop coding prompts, debug AI-generated code, and refine
              training data.
            </Typography>
          </Box>

          <Box sx={{ mb: 3 }}>
            <Typography variant="h6" color="text.primary">
              LionSoft LLC – Full-Stack Developer
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Jul 2024 – Oct 2024
            </Typography>
            <Typography color="text.primary">
              Designed and maintained full-stack apps, integrated Stripe
              billing, and implemented LLM assistant audit features.
            </Typography>
          </Box>

          <Box>
            <Typography variant="h6" color="text.primary">
              Cisco Meraki – Network Support Engineer
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Jan 2017 – Jul 2017
            </Typography>
            <Typography color="text.primary">
              Resolved 750+ enterprise networking cases and contributed to
              firmware bug fixes.
            </Typography>
          </Box>
        </Box>

        {/* Contact Section */}
        <Box id="contact" sx={{ mt: 6, mb: 2, scrollMarginTop: 80 }}>
          <Typography variant="h5" gutterBottom color="text.primary">
            Contact
          </Typography>
          <Typography color="text.secondary">
            Feel free to reach out via the links below.
          </Typography>
          <Box sx={{ mt: 2 }}>
            <Link
              href="mailto:adam.michael.bishop@gmail.com"
              sx={{ mr: 2 }}
              color="text.primary"
            >
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
          </Box>
        </Box>
      </Container>

      {/* Footer */}
      <Box
        component="footer"
        sx={{ p: 2, textAlign: "center", bgcolor: "white" }}
      >
        <Typography variant="body2" color="text.primary">
          © {new Date().getFullYear()} Adam Bishop | Built with React +
          TypeScript + MUI
        </Typography>
      </Box>
    </Box>
  );
}

export default App;
