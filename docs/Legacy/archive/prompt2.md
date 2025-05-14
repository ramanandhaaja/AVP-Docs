# Asset Valuer Pro (AVP) Documentation Project Instructions

## Project Objective
Review technical and business documentation for the Asset Valuer Pro application. DO NOt MODIFY THE LEGACY DOCUMENTATION - it references the mobile app v2 and v3. the transition to v3 is complete and theyu no longer user the file maker process, the solely use the v3 ios/ipados (Ipad) app. I would like you to review all the documentation and change anywhere it mentions the v2, to remove it, and assume that v3, ios/ipad os is now live.

## Project Context
The Asset Valuer Pro (AVP) application is a professional tool for asset valuation that needs thorough documentation for a new development team. You have access to:
- The source code in `${REPO_ROOT}/working-folder/source-code`
- Documentation templates in `${REPO_ROOT}/working-folder/templates`
- Context documents in `${REPO_ROOT}/working-folder/context-docs`
- Legacy documentation in `${REPO_ROOT}/working-folder/legacy-docs`
- business process docs in - `${REPO_ROOT}/working-folder/business-doc`

## Progress Tracking
All progress will be tracked in `${REPO_ROOT}/working-folder/APV_Documentation_Progress.md`. After completing each step or subtask, update this file to reflect the current status.

## Tools To Use
Always use the available tools when appropriate:
- `list_directory`: To explore the codebase structure
- `read_file`: To examine source code and existing documentation
- `search_files`: To find specific components or code patterns
- `write_file`: To create documentation files
- `edit_file`: To update the progress tracker and existing documentation
- `brave_web_search`: For researching technologies or frameworks when needed
- tavily search
- sequential thinking

## Working Instructions


## Important Guidelines

1. **Focus on Breadth First:**
   - Prioritize documenting all key components at a basic level before adding depth
   - Follow the prioritization in Next_Steps.md

2. **Manage Context Window Efficiently:**
   - Work on one component type at a time
   - Complete documentation for one component before moving to the next
   - Use `read_file` to load only relevant code when needed

3. **Keep Documentation Concise:**
   - Focus only on the "QUICK DOCUMENTATION" sections initially
   - Avoid copying large code blocks; summarize key functionality instead
   - Use bullet points for clarity

4. **Always Update Progress:**
   - Update the progress tracker after completing each significant task
   - Change status from 🔴 to 🟡 to 🟢 as tasks progress

5. **Use Templates Consistently:**
   - Follow the structure provided in the templates directory
   - Maintain consistent formatting across all documentation files



## Emoji Usage Guidelines for Documentation

To enhance readability and provide visual cues in our documentation, use the following emojis consistently:

### Section Headers
- 📋 Process workflows and procedures
- 🏗️ Architecture and structure information
- 🔧 Technical components and implementations
- 📊 Data models and schemas
- 📝 Business context and requirements

### Status Indicators
- ✅ Completed items or successful operations
- ⚠️ Items requiring attention or caution
- ❌ Issues, errors, or warnings
- 🔄 In-progress items or processes

### Information Types
- 💡 Tips, ideas, or recommendations
- ℹ️ Important information or notes
- 🔍 Examples or sample code
- ⚡ Performance considerations
- 🔒 Security-related information

### Usage Rules
1. Use emojis sparingly and purposefully - only where they add value
2. Place emojis at the beginning of headers or key points, not in the middle of text
3. Never use emojis as the sole means of conveying information
4. Maintain consistency across all documentation
5. Stick to common, universally supported emojis that render properly across platforms
6. Limit to 1-2 emojis per section to avoid visual clutter
7. Use standard Unicode emojis compatible with vanilla Markdown

### Implementation
- Add a legend at the beginning of comprehensive documents explaining emoji meanings
- For API documentation, use consistent emojis for HTTP methods (GET, POST, PUT, DELETE)
- In model documentation, use consistent emojis for entity relationships and attributes