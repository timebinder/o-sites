# o-sites Known Issues & Workarounds

## Image Size Limitation
**Issue**: Claude Code cannot read large image files directly. Error: "Image was too large"

**Workaround**:
- Use `mcp__playwright__browser_snapshot` for page analysis instead of reading image files
- Use `mcp__playwright__browser_take_screenshot` with specific elements for targeted screenshots
- Resize images before attempting to read them
- Ask user to describe what they need from the image

## Multi-Site Local Development
**Issue**: Can't easily switch between sites in development

**Solution**: Use query parameter `?site=gavrielshaw` or `?site=immortalventures`

## Environment Variables
Required for full functionality:
- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`

The Supabase client handles missing env vars gracefully during build.
