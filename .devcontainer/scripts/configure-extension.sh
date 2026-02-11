#!/bin/bash

echo "🔧 Configuring DesignToCode extension..."

# Check if secrets are available
if [ -z "$DESIGN_TO_CODE_API_TOKEN" ] || [ -z "$DESIGN_TO_CODE_API_URL" ] || [ -z "$FIGMA_ACCESS_TOKEN" ]; then
    echo "⚠️  Warning: Required secrets not found."
    echo "Please ensure DESIGN_TO_CODE_API_TOKEN, DESIGN_TO_CODE_API_URL, and FIGMA_ACCESS_TOKEN are set in repository secrets."
    exit 0
fi

# Create .vscode directory if it doesn't exist
mkdir -p .vscode

# Write settings to VSCode settings file
cat > .vscode/settings.json << EOF
{
  "designToCode.apiAccessToken": "$DESIGN_TO_CODE_API_TOKEN",
  "designToCode.apiUrl": "$DESIGN_TO_CODE_API_URL",
  "designToCode.figmaAccessToken": "$FIGMA_ACCESS_TOKEN"
}
EOF

echo "✅ Environment has been configured successfully!"