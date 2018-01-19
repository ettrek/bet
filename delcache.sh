#!/bin/bash
echo "Deleting all \`__pycache__\` directories..."
find . -type d -name "__pycache__" -exec rm -rf {} +
echo "Done."
