# Asset Valuer Pro (AVP) Documentation Project Instructions

## Project Objective
Create minimum viable technical documentation for the Asset Valuer Pro application to facilitate onboarding a new development team. This documentation will be based on analyzing the existing codebase, using provided templates, and incorporating available high-level documentation.

## Project Context
The Asset Valuer Pro (AVP) application is a professional tool for asset valuation that needs thorough documentation for a new development team. You have access to:
- The source code in `${REPO_ROOT}/working-folder/source-code`
- Documentation templates in `${REPO_ROOT}/working-folder/templates`
- Context documents in `${REPO_ROOT}/working-folder/context-docs`
- Legacy documentation in `${REPO_ROOT}/working-folder/legacy-docs`

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

## Working Instructions

### Phase 1: Repository Structure Analysis

1. **Explore the Source Code Structure**
   - Use `list_directory` and `directory_tree` to map out the repository structure
   - Identify the main solution files, projects, and key directories
   - Document the high-level structure in `${REPO_ROOT}/working-folder/technical-docs/Repository_Structure.md`

2. **Analyze Technology Stack**
   - Use `search_files` to find project files, package configurations, etc.
   - Confirm the technologies mentioned in the context documents
   - Create a comprehensive technology stack document at `${REPO_ROOT}/working-folder/technical-docs/Technology_Stack.md`

3. **Break The Documentation Into Manageable Chunks**
   - Separate .NET backend analysis from iOS app analysis
   - Use multiple Claude sessions if needed for different parts of the codebase
   - Update the progress tracker after completing this step

### Phase 2: Key Components Identification

For each major component type (working in 4 separate passes to optimize context window usage):

1. **API Controllers**
   - Use `search_files` to locate all controller files
   - Create an inventory at `${REPO_ROOT}/working-folder/technical-docs/API/Controllers_Inventory.md`
   - Prioritize according to the Next_Steps.md file

2. **Data Models**
   - Use `search_files` to locate all model/entity files
   - Create an inventory at `${REPO_ROOT}/working-folder/technical-docs/Models/Models_Inventory.md`
   - Prioritize core models mentioned in Next_Steps.md

3. **Business Logic Services**
   - Use `search_files` to locate all service files
   - Create an inventory at `${REPO_ROOT}/working-folder/technical-docs/Services/Services_Inventory.md`
   - Prioritize key services mentioned in Next_Steps.md

4. **Report Generators**
   - Use `search_files` to locate all report-related files
   - Create an inventory at `${REPO_ROOT}/working-folder/technical-docs/Reports/Reports_Inventory.md`

Update the progress tracker after each component type is inventoried.

### Phase 3: Quick Documentation Creation

Focus exclusively on the "QUICK DOCUMENTATION" sections in the templates:

1. **For Each Core Data Model:**
   - Read the source code using `read_file`
   - Copy the template from `${REPO_ROOT}/working-folder/templates/datamodel.md`
   - Create documentation in `${REPO_ROOT}/working-folder/technical-docs/Models/[ModelName].md`
   - Include: File Path, Primary Purpose, Key Fields, Relationships, Used By

2. **For Each Key Business Logic Service:**
   - Read the source code using `read_file`
   - Copy the template from `${REPO_ROOT}/working-folder/templates/businesslogic.md`
   - Create documentation in `${REPO_ROOT}/working-folder/technical-docs/Services/[ServiceName].md`
   - Include: File Path, Primary Purpose, Key Methods, Related Models, Used By

3. **For Each Main API Controller:**
   - Read the source code using `read_file`
   - Copy the template from `${REPO_ROOT}/working-folder/templates/api.md`
   - Create documentation in `${REPO_ROOT}/working-folder/technical-docs/API/[ControllerName].md`
   - Include: File Path, Primary Purpose, Key Endpoints, Request/Response Format, Used By

4. **For Each Report Generator:**
   - Read the source code using `read_file`
   - Copy the template from `${REPO_ROOT}/working-folder/templates/reportdocumentation.md`
   - Create documentation in `${REPO_ROOT}/working-folder/technical-docs/Reports/[ReportName].md`
   - Include: File Path, Primary Purpose, Input Parameters, Output Format, Used By

Update the progress tracker after each documentation file is created.

### Phase 4: Link Business Context

1. **Cross-Reference Components:**
   - Read legacy documentation using `read_file`
   - Identify business processes that correlate with technical components
   - Add brief notes in each technical doc about related business processes
   - Create a cross-reference map in `${REPO_ROOT}/working-folder/technical-docs/Business_Technical_Map.md`

2. **Update Quick Documentation:**
   - Add business context notes to each component's documentation
   - Keep these additions brief but informative

Update the progress tracker after completing this phase.

### Phase 5: Documentation Finalization

1. **Create Index:**
   - Create a master index of all documentation at `${REPO_ROOT}/working-folder/technical-docs/Documentation_Index.md`
   - Include links to all created documentation files

2. **Prepare Handoff Guide:**
   - Create a handoff guide at `${REPO_ROOT}/working-folder/technical-docs/Handoff_Guide.md`
   - Include suggestions for the new team on how to use and extend the documentation

3. **Final Review:**
   - Check for consistency across all documentation
   - Ensure all prioritized components are documented
   - Update the progress tracker to mark the project as complete

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

## Expected Deliverables

1. Complete documentation for priority components in `${REPO_ROOT}/working-folder/technical-docs/`
2. Fully updated progress tracker in `${REPO_ROOT}/working-folder/APV_Documentation_Progress.md`
3. Master documentation index and handoff guide

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