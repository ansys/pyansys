"""Script for automatically creating a milestone in repositories.

Only specified repositories (via environment variable) will be handled.

The purpose of this code is to connect to a specific repository
and create a milestone. This milestone will be associated to a certain date
provided as an input argument.

"""

import datetime
import os

import github

# Insert your credentials... It should be a PAT. None by default
TOKEN = None

# Provide the repository you want to create a milestone in... None by default
REPOSITORY = None

# Provide the release date to be considered... None by default
# If you provide manual input it should be using:
#
#   RELEASE_DATE = datetime.datetime.strptime(date_str,"%Y/%m/%d")
#
# where "date_str" must be a string date of format YYYY/MM/DD
RELEASE_DATE = None

# =============================================================================
# MODIFY WITH CAUTION FROM THIS POINT ONWARDS
# =============================================================================

# Check if a value for TOKEN was provided
if TOKEN is None:
    # This probably means that we are creating the milestone automatically
    # using our GitHub action: Create milestones for Ansys Release...
    # Thus, let us read the GitHub Token or PAT.
    print("Reading access token from 'TOKEN' environment variable...")
    TOKEN = os.environ.get("TOKEN", default=None)

# Check if a value for REPOSITORY was provided
if REPOSITORY is None:
    # This probably means that we are creating the milestone automatically
    # using our GitHub action: Create milestones for Ansys Release...
    # Thus, let us read the repository name.
    print("Reading target repo from 'REPOSITORY' environment variable...")
    REPOSITORY = os.environ.get("REPOSITORY", default=None)

# Check if a value for RELEASE_DATE was provided
if RELEASE_DATE is None:
    # This probably means that we are creating the milestone automatically
    # using our GitHub action: Create milestones for Ansys Release...
    # Thus, let us read the release date to be considered.
    print("Reading target repo from 'RELEASE_DATE' environment variable...")
    env_var = os.environ.get("RELEASE_DATE", default=None)
    if env_var is not None:
        try:
            RELEASE_DATE = datetime.datetime.strptime(env_var, "%Y/%m/%d")
        except (TypeError, ValueError, IndexError, KeyError):
            raise RuntimeError(
                """Problem parsing input date. It should be a string in format YYYY/MM/DD"""  # noqa: E501
            )


# If the value for TOKEN, REPOSITORY, RELEASE_DATE is None... throw error!
if TOKEN is None:
    raise ValueError("No TOKEN value available. Consider adding it.")
elif REPOSITORY is None:
    raise ValueError("No REPOSITORY value available. Consider adding it.")
elif RELEASE_DATE is None:
    raise ValueError("No RELEASE_DATE value available. Consider adding it.")

# Create a connection to GitHub
g = github.Github(TOKEN)

# Get the repository we want to create the milestone at
repo = g.get_repo(REPOSITORY)

# Get its last release - assuming semantic versioning (i.e. v0.1.0)
major, minor, _ = repo.get_latest_release().tag_name.replace("v", "").split(".")  # noqa: E501
next_release = f"v{major}.{int(minor)+1}.0"

# Get its available milestones
milestones = repo.get_milestones(state="all")

# Check if there is already any milestone whose name matches "next_release"
is_created = False
for milestone in milestones:
    if next_release in milestone.title:
        # The release is already created!
        is_created = True
        break

# If the milestone hasn't been created yet... go ahead!
if not is_created:

    # Milestone information
    desc = f"""This repository is part of an Ansys Release in the Unified Install.

Thus, it is necessary to create a release for the next Dev Complete date.
Please consider releasing by {RELEASE_DATE.strftime("%Y/%m/%d")}.

If your current release is the one expected to be used in the upcoming
official Ansys Release, please close and delete this milestone."""

    # Create a new milestone
    repo.create_milestone(
        title=next_release,
        state="open",
        description=desc,
        due_on=RELEASE_DATE + datetime.timedelta(hours=12),
    )

    print(f"Milestone was created at {REPOSITORY} with name {next_release}!")
else:
    print(f"Milestone was already available at {REPOSITORY}... Skipping creation!")  # noqa: 501
