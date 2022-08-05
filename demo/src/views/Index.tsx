import React, { useState, useReducer } from 'react';

import { Menu, Layout } from 'antd';

import Index from "../compontents/Index";

const { Header, Content, Footer, Sider } = Layout;

const menuList = [
    {
        key: "1",
        label: "Menu1",
        children: [
            {
                key: "1-1",
                label: "Menu 1-1",
            },
        ]
    },
    {
        key: "2",
        label: "Menu2",
        children: [
            {
                key: "2-1",
                label: "Menu 2-1",
            },
            {
                key: "2-2",
                label: "Menu 2-2",
            }
        ]
    }
]

const reduce = (state: any, action: any) => {
    switch (action.type) {
        case 'edit': {
            return [...action.payload]
        }
        default: {
            return [...state]
        }
    }
}

const MyLayout = () => {


    const [collapsed, setCollapsed] = useState(false);

    const [menuValue, setMenuValue] = useState<string>('');

    const [menupath, setMenuPath] = useState<string>('');

    const [MenuList, dispatch] = useReducer(reduce, menuList)

    const menuClick = (e: any) => {
        setMenuValue(e.domEvent.target.innerHTML);
        setMenuPath(e.keyPath);
    }

    const btnClick = (val: string) => {
        const newList = MenuList;
        newList.map((item: any) => {
            if (item.key === menupath[1]) {
                return item.children.map((item2: any) => {
                    if (item2.key === menupath[0]) {
                        return item2.label = val;
                    }
                    return item;
                })
            }
            return item;
        });
        dispatch({ type: 'edit', payload: newList })
    }

    return (
        <div className={'layout'}>
            <Layout style={{ minHeight: '100vh' }}>
                <Sider collapsible collapsed={collapsed} onCollapse={value => setCollapsed(value)}>
                    <div className="logo" />
                    <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={MenuList as any} onClick={menuClick} />
                </Sider>
                <Layout className="site-layout">
                    <Header className="site-layout-background" style={{ padding: 0 }} />
                    <Content style={{ margin: '0 16px' }}>
                        <Index label={menuValue} btnClick={btnClick} />
                    </Content>
                </Layout>
            </Layout>
        </div>
    );
};

export default MyLayout;