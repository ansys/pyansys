"""Script for automatically creating a milestone in repositories.

Only specified repositories (via environment variable) will be handled.
"""

import os

import github

# =============================================================================
#
# The purpose of this code is to connect to an org, connect to a repository
# and create a milestone. This milestone will be associated to a certain date
# provided as an input argument.
#
# =============================================================================

# Insert your credentials... None by default
MY_PAT = None

# Provide the repository you want to create a milestone in... None by default
REPOSITORY = None

# =============================================================================
# MODIFY WITH CAUTION FROM THIS POINT ONWARDS
# =============================================================================

# Check if a value for PAT was provided
if MY_PAT is None:
    # This probably means that we are creating the milestone automatically
    # using our GitHub action: Create milestones for Ansys Release...
    # Thus, let us read the GitHub Token.
    print("Reading access token from 'TOKEN' environment variable...")
    MY_PAT = os.environ.get("TOKEN", default=None)

# Check if a value for REPOSITORY was provided
if REPOSITORY is None:
    # This probably means that we are creating the milestone automatically
    # using our GitHub action: Create milestones for Ansys Release...
    # Thus, let us read the GitHub Token.
    print("Reading target repository from 'REPOSITORY' environment variable...")
    REPOSITORY = os.environ.get("REPOSITORY", default=None)

# If the value for PAT or REPOSITORY is still None... throw error!
if MY_PAT is None:
    raise ValueError("No PAT or value available. Consider adding it.")
elif REPOSITORY is None:
    raise ValueError("No REPOSTIORY or value available. Consider adding it.")

# Create a connection to GitHub
g = github.Github(MY_PAT)
