package com.formatiaoxigen.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping()
public class ProjectsController {

    @GetMapping("/projects")
    public String showProjectsPage() {

        return "projects";
    }
}
