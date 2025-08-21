#!/usr/bin/env node

import { program } from "commander";
import fs from "fs";
import os from "os";
import path from "path";
import clipboardy from "clipboardy";

const SNIPPETS_FILE = path.join(os.homedir(), ".snippets.json");

function loadSnippets() {
  if (!fs.existsSync(SNIPPETS_FILE)) return {};
  return JSON.parse(fs.readFileSync(SNIPPETS_FILE, "utf8"));
}

function saveSnippets(snippets) {
  fs.writeFileSync(SNIPPETS_FILE, JSON.stringify(snippets, null, 2));
}

program
  .command("save <key> <value>")
  .description("Save a snippet")
  .action((key, value) => {
    const snippets = loadSnippets();
    snippets[key] = value;
    saveSnippets(snippets);
    console.log(`✅ Saved snippet "${key}"`);
  });

program
  .command("list")
  .description("List all snippets")
  .action(() => {
    const snippets = loadSnippets();
    Object.entries(snippets).forEach(([key, value]) => {
      console.log(`${key} → ${value}`);
    });
  });

program
  .command("copy <key>")
  .description("Copy a snippet to clipboard")
  .action((key) => {
    const snippets = loadSnippets();
    if (!snippets[key]) {
      console.error(`❌ No snippet found for "${key}"`);
      process.exit(1);
    }
    clipboardy.writeSync(snippets[key]);
    console.log(`📋 Copied "${key}" to clipboard`);
  });

program
  .command("delete <key>")
  .description("Delete a snippet")
  .action((key) => {
    const snippets = loadSnippets();
    if (snippets[key]) {
      delete snippets[key];
      saveSnippets(snippets);
      console.log(`🗑️ Deleted snippet "${key}"`);
    } else {
      console.error(`❌ No snippet found for "${key}"`);
    }
  });

program.parse(process.argv);
