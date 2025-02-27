import React, { useState, useEffect, useRef } from "react";
import { Box, Stack, IconButton } from "@mui/material";
import FormatBoldIcon from "@mui/icons-material/FormatBold";
import FormatItalicIcon from "@mui/icons-material/FormatItalic";
import FormatUnderlinedIcon from "@mui/icons-material/FormatUnderlined";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import FormatListNumberedIcon from "@mui/icons-material/FormatListNumbered";

const RichTextEditor: React.FC = () => {
  const editorRef = useRef<HTMLDivElement | null>(null);
  const [content, setContent] = useState(() => {
    return localStorage.getItem("editorContent") || "";
  });

  useEffect(() => {
    if (editorRef.current) {
      editorRef.current.innerHTML = content;
    }
  }, []);

  const applyCommand = (
    command: string,
    value: string | undefined = undefined
  ) => {
    document.execCommand(command, false, value);
    editorRef.current?.focus();
  };

  const saveSelection = () => {
    const selection = window.getSelection();
    if (selection && selection.rangeCount > 0) {
      return selection.getRangeAt(0);
    }
    return null;
  };

  const restoreSelection = (range: Range | null) => {
    const selection = window.getSelection();
    if (range && selection) {
      selection.removeAllRanges();
      selection.addRange(range);
    }
  };

  const handleInput = () => {
    if (editorRef.current) {
      const newContent = editorRef.current.innerHTML;
      setContent(newContent);
      localStorage.setItem("editorContent", newContent);
    }
  };

  return (
    <Box sx={{ width: "100%", maxWidth: "600px", mx: "auto", p: 2 }}>
      <Stack
        direction="row"
        spacing={1}
        mb={1}
        sx={{
          background: "#333",
          padding: "8px",
          borderRadius: "8px",
          display: "flex",
          justifyContent: "center",
        }}>
        <IconButton size="small" onClick={() => applyCommand("bold")}>
          <FormatBoldIcon />
        </IconButton>
        <IconButton size="small" onClick={() => applyCommand("italic")}>
          <FormatItalicIcon />
        </IconButton>
        <IconButton size="small" onClick={() => applyCommand("underline")}>
          <FormatUnderlinedIcon />
        </IconButton>
        <IconButton
          size="small"
          onClick={() => applyCommand("insertUnorderedList")}>
          <FormatListBulletedIcon />
        </IconButton>
        <IconButton
          size="small"
          onClick={() => applyCommand("insertOrderedList")}>
          <FormatListNumberedIcon />
        </IconButton>
      </Stack>

      <div
        ref={editorRef}
        contentEditable
        suppressContentEditableWarning
        style={{
          minHeight: "200px",
          border: "1px solid #555",
          padding: "12px",
          borderRadius: "8px",
          background: "#222",
          color: "#fff",
          outline: "none",
          fontSize: "16px",
          lineHeight: "1.5",
          transition: "border 0.2s ease-in-out",
        }}
        onInput={handleInput}
        onFocus={() => {
          const savedRange = saveSelection();
          setTimeout(() => restoreSelection(savedRange), 0);
        }}
      />
    </Box>
  );
};

export default RichTextEditor;
