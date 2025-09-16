// src/App.tsx
import { AppBar, Toolbar, Typography, Container, Box, Link, Paper, List, ListItem, ListItemText } from "@mui/material";

function App() {
  return (
    <Box sx={{ minHeight: "100vh", bgcolor: "#f5f5f5", minWidth: "100vw"}}>
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
          <Typography variant="h5" gutterBottom>
            About Me
          </Typography>
          <Typography component="p">
            I’m a Full Stack Software Developer with experience in building and maintaining
            web applications, debugging complex systems, and contributing to team success
            through clean code and strong documentation. I’m passionate about learning new
            technologies and solving real-world problems.
          </Typography>
          <Box sx={{ mt: 2 }}>
            <Link href="mailto:adam.michael.bishop@gmail.com" sx={{ mr: 2 }}>
              Email
            </Link>
            <Link
              href="http://www.linkedin.com/in/adam-michael-bishop"
              target="_blank"
              sx={{ mr: 2 }}
            >
              LinkedIn
            </Link>
            <Link href="https://github.com/adam-michael-bishop" target="_blank">
              GitHub
            </Link>
          </Box>
        </Box>

        {/* Skills Section */}
        <Box sx={{ mb: 4 }}>
          <Typography variant="h5" gutterBottom>
            Technical Skills
          </Typography>
          <List>
            <ListItem>
              <ListItemText
                primary="Languages"
                secondary="Python, Java, JavaScript, HTML, CSS, jQuery, Bootstrap"
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary="Frameworks & Tools"
                secondary="React, Spring Boot, Hibernate, REST APIs, MySQL, Git"
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary="Networking"
                secondary="CCNA Certified, Cisco Routers, Firewalls, Switches"
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary="Familiarity"
                secondary="Docker, C++, C#"
              />
            </ListItem>
          </List>
        </Box>

        {/* Experience Section */}
        <Box>
          <Typography variant="h5" gutterBottom>
            Experience
          </Typography>
          <Box sx={{ mb: 3 }}>
            <Typography variant="h6">Outlier AI – AI Data Annotator</Typography>
            <Typography variant="body2" color="text.secondary">
              Oct 2024 – Present
            </Typography>
            <Typography>
              Develop coding prompts, debug AI-generated code, and refine training data.
            </Typography>
          </Box>

          <Box sx={{ mb: 3 }}>
            <Typography variant="h6">LionSoft LLC – Full-Stack Developer</Typography>
            <Typography variant="body2" color="text.secondary">
              Jul 2024 – Oct 2024
            </Typography>
            <Typography>
              Designed and maintained full-stack apps, integrated Stripe billing,
              and implemented LLM assistant audit features.
            </Typography>
          </Box>

          <Box>
            <Typography variant="h6">Cisco Meraki – Network Support Engineer</Typography>
            <Typography variant="body2" color="text.secondary">
              Jan 2017 – Jul 2017
            </Typography>
            <Typography>
              Resolved 750+ enterprise networking cases and contributed to firmware bug fixes.
            </Typography>
          </Box>
        </Box>
      </Container>

      {/* Footer */}
      <Box component="footer" sx={{ p: 2, textAlign: "center", bgcolor: "white" }}>
        <Typography variant="body2" color="text.secondary">
          © {new Date().getFullYear()} Adam Bishop | Built with React + TypeScript + MUI
        </Typography>
      </Box>
    </Box>
  );
}

export default App;