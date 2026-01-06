// Dashboard Configuration
export const dashboardConfig = {
    appName: 'CORtracker360',
    appTagline: 'A 360° Solutions',
    modules: [
        {
            id: 'accounts',
            title: 'Accounts',
            subtitle: 'Management',
            icon: 'fas fa-file-invoice-dollar',
            color: '#ef4444',
            bgColor: 'rgba(239, 68, 68, 0.1)',
            route: '/accounts',
            description: 'Manage financial accounts and transactions'
        },
        {
            id: 'purchases',
            title: 'Purchases',
            subtitle: 'Management',
            icon: 'fas fa-shopping-cart',
            color: '#10b981',
            bgColor: 'rgba(16, 185, 129, 0.1)',
            route: '/purchases',
            description: 'Track and manage purchase orders'
        },
        {
            id: 'crm',
            title: 'CRM',
            subtitle: 'Customer relationship management',
            icon: 'fas fa-users',
            color: '#3b82f6',
            bgColor: 'rgba(59, 130, 246, 0.1)',
            route: '/crm',
            description: 'Manage customer relationships'
        },
        {
            id: 'production',
            title: 'Production',
            subtitle: 'Management',
            icon: 'fas fa-industry',
            color: '#f59e0b',
            bgColor: 'rgba(245, 158, 11, 0.1)',
            route: '/production',
            description: 'Monitor production processes'
        },
        {
            id: 'qc',
            title: 'QC',
            subtitle: 'Quality Check',
            icon: 'fas fa-check-circle',
            color: '#8b5cf6',
            bgColor: 'rgba(139, 92, 246, 0.1)',
            route: '/qc',
            description: 'Quality control and assurance'
        },
        {
            id: 'inventory',
            title: 'Inventory',
            subtitle: 'Management',
            icon: 'fas fa-boxes',
            color: '#f97316',
            bgColor: 'rgba(249, 115, 22, 0.1)',
            route: '/inventory',
            description: 'Track inventory levels and stock'
        },
        {
            id: 'sales',
            title: 'Sales',
            subtitle: 'Management',
            icon: 'fas fa-chart-line',
            color: '#06b6d4',
            bgColor: 'rgba(6, 182, 212, 0.1)',
            route: '/sales',
            description: 'Manage sales and revenue'
        },
        {
            id: 'hrd',
            title: 'HRD',
            subtitle: 'Human Resource Development',
            icon: 'fas fa-user-tie',
            color: '#ec4899',
            bgColor: 'rgba(236, 72, 153, 0.1)',
            route: '/hrd',
            description: 'Human resource management'
        },
        {
            id: 'maintenance',
            title: 'Maintenance',
            subtitle: 'Management',
            icon: 'fas fa-tools',
            color: '#3b82f6',
            bgColor: 'rgba(59, 130, 246, 0.1)',
            route: '/maintenance',
            description: 'Equipment and facility maintenance'
        },
        {
            id: 'analysis',
            title: 'Analysis',
            subtitle: 'Reports',
            icon: 'fas fa-chart-pie',
            color: '#84cc16',
            bgColor: 'rgba(132, 204, 22, 0.1)',
            route: '/analysis',
            description: 'Business analytics and reports'
        },
        {
            id: 'admin',
            title: 'Admin',
            subtitle: 'Administration',
            icon: 'fas fa-shield-alt',
            color: '#ef4444',
            bgColor: 'rgba(239, 68, 68, 0.1)',
            route: '/admin',
            description: 'System administration and settings'
        }
    ],
    theme: {
        primaryColor: '#6366f1',
        sidebarGradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        borderRadius: '12px',
        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
    },
    user: {
        name: 'Vishal',
        role: 'Administrator',
        status: 'Available',
        avatar: 'https://ui-avatars.com/api/?name=Vishal&background=6366f1&color=fff'
    }
};

