interface HardSkill {
  name: string;
  description: string;
  icon: string;
}

const hardSkills: HardSkill[] = [
  {
    name: "Red Hat Enterprise Linux",
    description: "RHEL administration, patching, LVM, firewall configuration, user management, system hardening, and troubleshooting.",
    icon: "tools-fill"
  },
  {
    name: "Red Hat OpenShift",
    description: "OpenShift cluster operations, node labeling, taints and tolerations, Local Storage Operator, routes, certificates, and platform updates.",
    icon: "group-fill"
  },
  {
    name: "Automation & Scripting",
    description: "Ansible playbooks and Bash scripts for Linux hardening, operational automation, and repeatable infrastructure tasks.",
    icon: "time-fill"
  },
  {
    name: "CI/CD & Containers",
    description: "Jenkins, GitLab CI, GitLab Runner, Docker, Docker Compose, and application deployment workflows.",
    icon: "github-fill"
  },
  {
    name: "Monitoring & Logging",
    description: "Operational experience with Zabbix, ELK Stack, Prometheus, Grafana, and production health checks.",
    icon: "time-line"
  },
  {
    name: "Red Hat Satellite",
    description: "Subscription management, repository updates, patching, and managed RHEL lifecycle operations.",
    icon: "link"
  }
];

export default hardSkills;
