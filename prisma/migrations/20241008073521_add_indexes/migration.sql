-- CreateIndex
CREATE INDEX "Account_userId_idx" ON "Account"("userId");

-- CreateIndex
CREATE INDEX "Base_workspaceId_idx" ON "Base"("workspaceId");

-- CreateIndex
CREATE INDEX "Field_tableId_idx" ON "Field"("tableId");

-- CreateIndex
CREATE INDEX "Record_tableId_idx" ON "Record"("tableId");

-- CreateIndex
CREATE INDEX "Table_baseId_idx" ON "Table"("baseId");

-- CreateIndex
CREATE INDEX "VerificationToken_identifier_idx" ON "VerificationToken"("identifier");

-- CreateIndex
CREATE INDEX "Workspace_userId_idx" ON "Workspace"("userId");
