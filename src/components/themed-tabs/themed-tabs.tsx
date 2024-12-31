import clsx from "clsx";
import { useState, createContext, useContext, ReactNode } from "react";

type TabsContextProps = {
  activeTab: number;
  setActiveTab: (index: number) => void;
};

const TabsContext = createContext<TabsContextProps | undefined>(undefined);

function Tabs({ children }: { children: ReactNode }) {
  const [activeTab, setActiveTab] = useState(0);
  return (
    <TabsContext.Provider value={{ activeTab, setActiveTab }}>
      <div>{children}</div>
    </TabsContext.Provider>
  );
}

function TabsList({ children }: { children: ReactNode }) {
  return <div className="tabs-list">{children}</div>;
}

function Tab({ index, children }: { index: number; children: ReactNode }) {
  const context = useContext(TabsContext);
  if (!context) {
    throw new Error("Tab must be used within a TabsProvider");
  }
  const { activeTab, setActiveTab } = context;

  return (
    <button
      onClick={() => setActiveTab(index)}
      className={clsx(
        "tab",
        index === activeTab ? "tab-active" : "tab-inactive"
      )}
    >
      {children}
    </button>
  );
}

function TabPanels({ children }: { children: ReactNode[] }) {
  const context = useContext(TabsContext);
  if (!context) {
    throw new Error("TabPanels must be used within a TabsProvider");
  }
  const { activeTab } = context;
  return <div className="tab-panels">{children[activeTab]}</div>;
}

function TabPanel({ children }: { children: ReactNode }) {
  return <div>{children}</div>;
}

export default function ThemedTabs() {
  return (
    <main className="container">
      <h2 className="title">Themed Tabs</h2>

      <div className="compound">
        <Tabs>
          <TabsList>
            <Tab index={0}>Tab 1</Tab>
            <Tab index={1}>Tab 2</Tab>
            <Tab index={2}>Tab 3</Tab>
          </TabsList>
          <TabPanels>
            <TabPanel>
              <p>Content for Tab 1</p>
            </TabPanel>
            <TabPanel>
              <p>Content for Tab 2</p>
            </TabPanel>
            <TabPanel>
              <p>Content for Tab 3</p>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </div>
    </main>
  );
}
