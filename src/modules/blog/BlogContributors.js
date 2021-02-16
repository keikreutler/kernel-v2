// @flow
/** @jsx jsx */

import React from "react";
import type { Node } from "react";
import { getAuthorData } from "./BlogAuthor";
import { Image, Box, Flex, Text, jsx } from "theme-ui";
import { Icon } from "@makerdao/dai-ui-icons";

type TBlogContributorsProps = {
  contributors: Array<string>,
};

export default function BlogContributors({
  contributors,
}: TBlogContributorsProps): Node {
  return (
    <Flex
      sx={{
        flexDirection: ["column", "row", "row"],
        justifyContent: "space-evenly",
        margin: "auto",
      }}
    >
      {contributors.map((author) => {
        const authorData = getAuthorData(author);

        return (
          <Flex
            sx={{
              flexDirection: "column",
              alignItems: "center",
              mt: 2,
            }}
          >
            {authorData.avatar_url ? (
              <Box>
                <Image
                  src={authorData.avatar_url}
                  sx={{
                    width: 60,
                    height: 60,
                    borderRadius: 99999,
                    mt: [2, "unset", "unset"],
                  }}
                />
              </Box>
            ) : (
              <Icon
                name="person"
                size={"64px"}
                sx={{
                  color: "primary",
                  mt: [2, "unset", "unset"],
                }}
              />
            )}

            <Box>
              <Box sx={{ mb: [2, "unset", "unset"] }}>{authorData.name}</Box>
            </Box>
          </Flex>
        );
      })}
    </Flex>
  );
}